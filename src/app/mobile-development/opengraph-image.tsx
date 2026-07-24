import { mobileDevelopment } from '@/content/services';
import { renderOgImage, formatStat, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const runtime = 'nodejs';
export const alt = mobileDevelopment.h1;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: mobileDevelopment.eyebrow,
    title: mobileDevelopment.h1,
    lead: mobileDevelopment.summary,
    accent: mobileDevelopment.accent,
    stats: mobileDevelopment.stats.slice(0, 3).map((stat) => ({ value: formatStat(stat), label: stat.label })),
  });
}
