import type { MetadataRoute } from 'next';
import { site } from '@/content/site';
import { withBasePath } from '@/lib/basePath';

// Emitted as a static file so the site can also ship as a pure static export.
export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.legalName,
    short_name: site.name,
    description: site.description,
    start_url: withBasePath('/'),
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2F6BFF',
    icons: [
      { src: withBasePath('/icon.svg'), sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
    ],
  };
}
