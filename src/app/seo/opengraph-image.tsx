import { seo } from '@/content/services';
import { renderOgImage, formatStat, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const runtime = 'nodejs';
export const dynamic = 'force-static';
export const alt = seo.h1;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: seo.eyebrow,
    title: seo.h1,
    lead: seo.summary,
    accent: seo.accent,
    stats: seo.stats.slice(0, 3).map((stat) => ({ value: formatStat(stat), label: stat.label })),
  });
}
