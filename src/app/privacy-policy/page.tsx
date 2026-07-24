import type { Metadata } from 'next';
import { LegalPage } from '@/components/templates/LegalPage';
import { privacyPolicy } from '@/content/legal';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: privacyPolicy.seo.title,
  description: privacyPolicy.seo.description,
  keywords: privacyPolicy.seo.keywords,
  path: '/privacy-policy',
});

export default function Page() {
  return <LegalPage doc={privacyPolicy} />;
}
