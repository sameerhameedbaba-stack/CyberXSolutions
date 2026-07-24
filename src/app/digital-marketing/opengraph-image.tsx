import { digitalMarketing } from '@/content/services';
import { renderOgImage, formatStat, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const runtime = 'nodejs';
export const dynamic = 'force-static';
export const alt = digitalMarketing.h1;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: digitalMarketing.eyebrow,
    title: digitalMarketing.h1,
    lead: digitalMarketing.summary,
    accent: digitalMarketing.accent,
    stats: digitalMarketing.stats.slice(0, 3).map((stat) => ({ value: formatStat(stat), label: stat.label })),
  });
}
