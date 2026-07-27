/**
 * Two build modes:
 *
 *   npm run build         Node server build. Keeps /api/contact. For Vercel,
 *                         a Hostinger VPS, or anything that runs Node.
 *   npm run build:static  Pure static export into ./out. Drops /api/contact —
 *                         set NEXT_PUBLIC_CONTACT_ENDPOINT so the form posts
 *                         somewhere. For Hostinger shared/Premium/Business,
 *                         or any plain Apache/LiteSpeed docroot.
 */
const isStatic = process.env.BUILD_TARGET === 'static';

// GitHub Pages serves a project site from /<repo>/, so every asset and internal
// link needs that prefix. Empty for a domain-root deploy, which is every other case.
const basePath = process.env.BASE_PATH ?? '';

const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    // A static export has no image optimiser. The site ships no raster art,
    // so this costs nothing.
    unoptimized: isStatic,
  },

  ...(basePath ? { basePath, assetPrefix: basePath } : {}),

  ...(isStatic
    ? {
        output: 'export',
        // Emits /about/index.html rather than /about.html, which is what a
        // plain Apache docroot expects.
        trailingSlash: true,
      }
    : {
        // next.config headers only apply when Node serves the site. The static
        // build ships the same headers via public/.htaccess instead.
        async headers() {
          return [{ source: '/:path*', headers: securityHeaders }];
        },
      }),
};

export default nextConfig;
