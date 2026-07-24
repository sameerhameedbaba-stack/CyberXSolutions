import { aiAgents, aiAutomation, aiCybersecurity, enterpriseSolutions } from './ai';
import { customSoftware, webDevelopment, mobileDevelopment, cloudEngineering } from './engineering';
import { digitalMarketing, seo } from './growth';
import type { Service } from './types';

export type { Service } from './types';

/** Ordered for the services index page — highest-intent first. */
export const services: Service[] = [
  aiAgents,
  aiAutomation,
  enterpriseSolutions,
  aiCybersecurity,
  customSoftware,
  webDevelopment,
  mobileDevelopment,
  cloudEngineering,
  digitalMarketing,
  seo,
];

export {
  aiAgents,
  aiAutomation,
  aiCybersecurity,
  enterpriseSolutions,
  customSoftware,
  webDevelopment,
  mobileDevelopment,
  cloudEngineering,
  digitalMarketing,
  seo,
};

export const serviceGroups: { heading: string; blurb: string; slugs: string[] }[] = [
  {
    heading: 'AI & Autonomy',
    blurb: 'Systems that decide and act, not just predict.',
    slugs: ['ai-agents', 'ai-automation', 'enterprise-solutions'],
  },
  {
    heading: 'Security',
    blurb: 'Detection and response that moves faster than an attacker.',
    slugs: ['ai-cybersecurity'],
  },
  {
    heading: 'Engineering',
    blurb: 'The software and infrastructure everything else stands on.',
    slugs: ['custom-software-development', 'web-development', 'mobile-development', 'cloud-engineering'],
  },
  {
    heading: 'Growth',
    blurb: 'Demand that can be forecast and defended to a CFO.',
    slugs: ['digital-marketing', 'seo'],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
