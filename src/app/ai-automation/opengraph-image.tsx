import { aiAutomation } from '@/content/services';
import { renderOgImage, formatStat, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const runtime = 'nodejs';
export const dynamic = 'force-static';
export const alt = aiAutomation.h1;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: aiAutomation.eyebrow,
    title: aiAutomation.h1,
    lead: aiAutomation.summary,
    accent: aiAutomation.accent,
    stats: aiAutomation.stats.slice(0, 3).map((stat) => ({ value: formatStat(stat), label: stat.label })),
  });
}
