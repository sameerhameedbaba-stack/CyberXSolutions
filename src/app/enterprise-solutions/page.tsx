import type { Metadata } from 'next';
import { ServicePage } from '@/components/templates/ServicePage';
import { enterpriseSolutions } from '@/content/services';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: enterpriseSolutions.seo.title,
  description: enterpriseSolutions.seo.description,
  keywords: enterpriseSolutions.seo.keywords,
  path: enterpriseSolutions.href,
  ogTitle: enterpriseSolutions.h1,
});

export default function Page() {
  return <ServicePage service={enterpriseSolutions} />;
}
