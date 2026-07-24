import type { Metadata } from 'next';
import { LegalPage } from '@/components/templates/LegalPage';
import { cookiePolicy } from '@/content/legal';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: cookiePolicy.seo.title,
  description: cookiePolicy.seo.description,
  keywords: cookiePolicy.seo.keywords,
  path: '/cookie-policy',
});

export default function Page() {
  return <LegalPage doc={cookiePolicy} />;
}
