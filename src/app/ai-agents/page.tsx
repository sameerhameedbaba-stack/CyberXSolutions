import type { Metadata } from 'next';
import { ServicePage } from '@/components/templates/ServicePage';
import { aiAgents } from '@/content/services';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: aiAgents.seo.title,
  description: aiAgents.seo.description,
  keywords: aiAgents.seo.keywords,
  path: aiAgents.href,
  ogTitle: aiAgents.h1,
});

export default function Page() {
  return <ServicePage service={aiAgents} />;
}
