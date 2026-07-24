import type { Metadata } from 'next';
import { ServicePage } from '@/components/templates/ServicePage';
import { webDevelopment } from '@/content/services';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: webDevelopment.seo.title,
  description: webDevelopment.seo.description,
  keywords: webDevelopment.seo.keywords,
  path: webDevelopment.href,
  ogTitle: webDevelopment.h1,
});

export default function Page() {
  return <ServicePage service={webDevelopment} />;
}
