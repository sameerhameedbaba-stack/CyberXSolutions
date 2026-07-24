import type { Metadata } from 'next';
import { ServicePage } from '@/components/templates/ServicePage';
import { seo } from '@/content/services';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: seo.seo.title,
  description: seo.seo.description,
  keywords: seo.seo.keywords,
  path: seo.href,
  ogTitle: seo.h1,
});

export default function Page() {
  return <ServicePage service={seo} />;
}
