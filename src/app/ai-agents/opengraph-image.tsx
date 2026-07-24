import { aiAgents } from '@/content/services';
import { renderOgImage, formatStat, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const runtime = 'nodejs';
export const dynamic = 'force-static';
export const alt = aiAgents.h1;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: aiAgents.eyebrow,
    title: aiAgents.h1,
    lead: aiAgents.summary,
    accent: aiAgents.accent,
    stats: aiAgents.stats.slice(0, 3).map((stat) => ({ value: formatStat(stat), label: stat.label })),
  });
}
