import type { Metadata } from 'next';
import { ServicePage } from '@/components/templates/ServicePage';
import { digitalMarketing } from '@/content/services';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: digitalMarketing.seo.title,
  description: digitalMarketing.seo.description,
  keywords: digitalMarketing.seo.keywords,
  path: digitalMarketing.href,
  ogTitle: digitalMarketing.h1,
});

export default function Page() {
  return <ServicePage service={digitalMarketing} />;
}
