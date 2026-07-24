import type { Metadata } from 'next';
import { LegalPage } from '@/components/templates/LegalPage';
import { termsOfService } from '@/content/legal';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: termsOfService.seo.title,
  description: termsOfService.seo.description,
  keywords: termsOfService.seo.keywords,
  path: '/terms',
});

export default function Page() {
  return <LegalPage doc={termsOfService} />;
}
