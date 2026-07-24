import type { Metadata } from 'next';
import { ServicePage } from '@/components/templates/ServicePage';
import { aiCybersecurity } from '@/content/services';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: aiCybersecurity.seo.title,
  description: aiCybersecurity.seo.description,
  keywords: aiCybersecurity.seo.keywords,
  path: aiCybersecurity.href,
  ogTitle: aiCybersecurity.h1,
});

export default function Page() {
  return <ServicePage service={aiCybersecurity} />;
}
