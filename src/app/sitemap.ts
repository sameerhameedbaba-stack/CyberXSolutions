import type { MetadataRoute } from 'next';
import { site, allRoutes } from '@/content/site';
import { posts } from '@/content/insights';
import { caseStudies } from '@/content/caseStudies';

// Emitted as a static file so the site can also ship as a pure static export.
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = allRoutes.map((route) => ({
    url: `${site.url}${route.href === '/' ? '' : route.href}`,
    lastModified,
    changeFrequency: (route.priority >= 0.9 ? 'weekly' : route.priority >= 0.7 ? 'monthly' : 'yearly') as
      | 'weekly'
      | 'monthly'
      | 'yearly',
    priority: route.priority,
  }));

  const postRoutes = posts.map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }));

  const caseRoutes = caseStudies.map((study) => ({
    url: `${site.url}/case-studies/${study.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...postRoutes, ...caseRoutes];
}
