import type { Metadata } from 'next';
import { ServicePage } from '@/components/templates/ServicePage';
import { mobileDevelopment } from '@/content/services';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: mobileDevelopment.seo.title,
  description: mobileDevelopment.seo.description,
  keywords: mobileDevelopment.seo.keywords,
  path: mobileDevelopment.href,
  ogTitle: mobileDevelopment.h1,
});

export default function Page() {
  return <ServicePage service={mobileDevelopment} />;
}
