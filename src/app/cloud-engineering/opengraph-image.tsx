import { cloudEngineering } from '@/content/services';
import { renderOgImage, formatStat, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const runtime = 'nodejs';
export const alt = cloudEngineering.h1;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: cloudEngineering.eyebrow,
    title: cloudEngineering.h1,
    lead: cloudEngineering.summary,
    accent: cloudEngineering.accent,
    stats: cloudEngineering.stats.slice(0, 3).map((stat) => ({ value: formatStat(stat), label: stat.label })),
  });
}
