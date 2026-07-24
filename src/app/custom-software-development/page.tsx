import type { Metadata } from 'next';
import { ServicePage } from '@/components/templates/ServicePage';
import { customSoftware } from '@/content/services';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: customSoftware.seo.title,
  description: customSoftware.seo.description,
  keywords: customSoftware.seo.keywords,
  path: customSoftware.href,
  ogTitle: customSoftware.h1,
});

export default function Page() {
  return <ServicePage service={customSoftware} />;
}
