import { caseStudies, getCaseStudy } from '@/content/caseStudies';
import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const runtime = 'nodejs';
export const alt = 'CyberXSolutions case study';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  return renderOgImage({
    eyebrow: study?.sector ?? 'Case study',
    title: study?.title ?? 'Measured before. Measured after.',
    lead: study?.summary,
    accent: study?.accent ?? 'blue',
    stats: study?.metrics.slice(0, 3).map((metric) => ({ value: metric.value, label: metric.label })),
  });
}
