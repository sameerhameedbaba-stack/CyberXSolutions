import type { Metadata } from 'next';
import { ServicePage } from '@/components/templates/ServicePage';
import { cloudEngineering } from '@/content/services';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: cloudEngineering.seo.title,
  description: cloudEngineering.seo.description,
  keywords: cloudEngineering.seo.keywords,
  path: cloudEngineering.href,
  ogTitle: cloudEngineering.h1,
});

export default function Page() {
  return <ServicePage service={cloudEngineering} />;
}
