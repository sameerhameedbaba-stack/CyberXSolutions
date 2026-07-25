/**
 * Set when the site is served from a subdirectory rather than a domain root —
 * GitHub Pages puts it under /<repo>/. Empty for Hostinger.
 *
 * next/link and next/image apply next.config's basePath themselves, so this is
 * only for URLs Next does not rewrite: metadata icons, the web manifest, and
 * links to static files in public/.
 */
export const basePath = process.env.BUILD_BASE_PATH ?? '';

/** Prefix a root-relative path with the base path, if there is one. */
export function withBasePath(path: string): string {
  return `${basePath}${path}`;
}
