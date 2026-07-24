import { site } from '@/content/site';

type Json = Record<string, unknown>;

const ORG_ID = `${site.url}/#organization`;
const SITE_ID = `${site.url}/#website`;

export function organizationSchema(): Json {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    logo: {
      '@type': 'ImageObject',
      url: `${site.url}/logo.svg`,
      width: 512,
      height: 512,
    },
    description: site.description,
    foundingDate: String(site.foundedYear),
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${site.address.street}, ${site.address.unit}`,
      addressLocality: site.address.city,
      addressRegion: site.address.regionCode,
      postalCode: site.address.postalCode,
      addressCountry: site.address.countryCode,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: site.email,
        areaServed: 'Worldwide',
        availableLanguage: ['English'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'technical support',
        email: site.email,
        areaServed: 'Worldwide',
        availableLanguage: ['English'],
      },
    ],
    sameAs: [site.social.linkedin, site.social.x, site.social.github, site.social.youtube],
    knowsAbout: [
      'Agentic AI',
      'AI Agents',
      'Enterprise AI',
      'Business Automation',
      'AI Software Development',
      'Custom Software Development',
      'AI Cybersecurity',
      'Cloud Engineering',
      'Digital Transformation',
    ],
  };
}

export function websiteSchema(): Json {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: site.url,
    name: site.legalName,
    description: site.description,
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-US',
  };
}

export function breadcrumbSchema(trail: { name: string; href: string }[]): Json {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.href === '/' ? '' : item.href}`,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]): Json {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}): Json {
  return {
    '@type': 'Service',
    '@id': `${site.url}${input.path}#service`,
    name: input.name,
    description: input.description,
    serviceType: input.serviceType,
    url: `${site.url}${input.path}`,
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'Place', name: 'Worldwide' },
    audience: { '@type': 'Audience', audienceType: 'Enterprise and mid-market organizations' },
  };
}

export function articleSchema(input: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  author: string;
}): Json {
  return {
    '@type': 'Article',
    headline: input.headline,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.datePublished,
    author: { '@type': 'Person', name: input.author },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${site.url}${input.path}` },
    inLanguage: 'en-US',
  };
}

export function collectionSchema(input: {
  name: string;
  description: string;
  path: string;
  items: { name: string; href: string }[];
}): Json {
  return {
    '@type': 'CollectionPage',
    name: input.name,
    description: input.description,
    url: `${site.url}${input.path}`,
    isPartOf: { '@id': SITE_ID },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: input.items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        url: `${site.url}${item.href}`,
      })),
    },
  };
}

/** Wraps any number of schema nodes into a single @graph document. */
export function graph(...nodes: Json[]): string {
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes });
}
