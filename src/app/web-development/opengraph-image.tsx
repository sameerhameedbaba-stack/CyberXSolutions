import { webDevelopment } from '@/content/services';
import { renderOgImage, formatStat, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const runtime = 'nodejs';
export const dynamic = 'force-static';
export const alt = webDevelopment.h1;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: webDevelopment.eyebrow,
    title: webDevelopment.h1,
    lead: webDevelopment.summary,
    accent: webDevelopment.accent,
    stats: webDevelopment.stats.slice(0, 3).map((stat) => ({ value: formatStat(stat), label: stat.label })),
  });
}
