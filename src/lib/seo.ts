import type { Metadata } from 'next';
import { site } from '@/content/site';

export type SeoInput = {
  title: string;
  description: string;
  keywords: string[];
  /** Route path beginning with "/" — used for the canonical URL. */
  path: string;
  /** Overrides the default social card headline. */
  ogTitle?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  noIndex?: boolean;
  /** Skips the "| CyberXSolutions" template — used by the home page only. */
  absoluteTitle?: boolean;
};

export function buildMetadata({
  title,
  description,
  keywords,
  path,
  ogTitle,
  type = 'website',
  publishedTime,
  noIndex = false,
  absoluteTitle = false,
}: SeoInput): Metadata {
  const url = `${site.url}${path === '/' ? '' : path}`;
  // The root layout appends "| CyberXSolutions"; strip any suffix a page carries
  // so the brand never appears twice in one <title>.
  const bareTitle = title.replace(/\s*[|–—-]\s*CyberXSolutions\s*$/i, '').trim();
  const socialTitle = ogTitle ?? title;

  return {
    title: absoluteTitle ? { absolute: title } : bareTitle,
    description,
    keywords,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: site.legalName,
      locale: 'en_US',
      type,
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      site: '@cyberxsolutions',
      creator: '@cyberxsolutions',
    },
  };
}
