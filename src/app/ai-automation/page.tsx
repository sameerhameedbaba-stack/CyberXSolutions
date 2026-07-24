import type { Metadata } from 'next';
import { ServicePage } from '@/components/templates/ServicePage';
import { aiAutomation } from '@/content/services';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: aiAutomation.seo.title,
  description: aiAutomation.seo.description,
  keywords: aiAutomation.seo.keywords,
  path: aiAutomation.href,
  ogTitle: aiAutomation.h1,
});

export default function Page() {
  return <ServicePage service={aiAutomation} />;
}
