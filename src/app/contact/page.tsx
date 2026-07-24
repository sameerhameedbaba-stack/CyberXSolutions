import type { Metadata } from 'next';

import { Aurora, Motes } from '@/components/ui/Aurora';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Icon } from '@/components/ui/Icon';
import { Breadcrumbs, RelatedLinks, CheckList, Badge } from '@/components/ui/Bits';
import { ContactForm } from '@/components/sections/ContactForm';
import { FAQSection } from '@/components/sections/FAQ';
import { ContactPanel } from '@/components/visuals/Panels';

import { site, fullAddress } from '@/content/site';
import { generalFaqs } from '@/content/social';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Contact — Book a working session',
  description:
    'Ninety minutes with senior engineers, no charge and no pitch deck. Bring the process that keeps breaking and you leave with a systems map and an honest recommendation.',
  keywords: [
    'contact CyberXSolutions',
    'AI consultation',
    'book a working session',
    'enterprise AI consulting',
    'AI project enquiry',
  ],
  path: '/contact',
  ogTitle: 'Ninety minutes. No slides. No obligation.',
});

const channels = [
  {
    label: 'Email',
    value: site.email,
    meta: 'Read by a senior engineer, replied to same working day',
    icon: 'mail',
    accent: 'blue' as const,
    href: `mailto:${site.email}`,
  },
  {
    label: 'Working session',
    value: 'Ninety minutes, no charge',
    meta: 'Four to six people from your side, no slides from ours',
    icon: 'headset',
    accent: 'violet' as const,
  },
  {
    label: 'Office',
    value: `${site.address.city}, ${site.address.regionCode}`,
    meta: fullAddress,
    icon: 'map-pin',
    accent: 'emerald' as const,
  },
  {
    label: 'Partnerships',
    value: 'Referral, delivery and technology',
    meta: 'Written terms within a fortnight of first conversation',
    icon: 'handshake',
    accent: 'cyan' as const,
    href: '/partners',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero + form */}
      <section className="relative isolate overflow-hidden bg-white pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-36">
        <Aurora preset="hero" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 grid-overlay" />
        <Motes count={10} className="-z-10 hidden lg:block" />

        <div className="container-x">
          <Breadcrumbs trail={[{ name: 'Contact', href: '/contact' }]} className="mb-8" />

          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
            <div>
              <Reveal>
                <p className="eyebrow">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-gradient" />
                  Contact
                </p>
              </Reveal>

              <Reveal delay={70}>
                <h1 className="mt-5 text-display-lg text-ink-950">
                  Ninety minutes. <span className="text-gradient">No slides.</span>
                </h1>
              </Reveal>

              <Reveal delay={130}>
                <p className="mt-6 max-w-xl text-lead-lg text-ink-500">
                  Bring the process that keeps breaking and whatever numbers you already have. You leave with a systems
                  map, an automation shortlist and an honest read on what AI should and should not touch.
                </p>
              </Reveal>

              <Reveal delay={190}>
                <div className="mt-8">
                  <Badge tone="emerald" icon="check-circle">
                    Around a third of these end with us recommending you do not proceed
                  </Badge>
                </div>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-9 rounded-2xl border border-ink-100 bg-ink-50/60 p-6">
                  <h2 className="text-[0.75rem] font-bold uppercase tracking-[0.14em] text-ink-500">
                    What happens next
                  </h2>
                  <CheckList
                    className="mt-4"
                    items={[
                      'A senior engineer reads your message — not a sales development rep',
                      'You get a reply within one working day, usually the same day',
                      'If we are not the right fit, we say so and suggest who is',
                      'No mailing list, no nurture sequence, no follow-up cadence',
                    ]}
                  />
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div className="mt-8">
                  <ContactPanel channels={channels} />
                </div>
              </Reveal>
            </div>

            <Reveal from="right" delay={160}>
              <div id="form" className="lg:sticky lg:top-28">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Office */}
      <Section tone="muted" aria-labelledby="office-heading">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              id="office-heading"
              align="left"
              eyebrow="Where we are"
              title={
                <>
                  Registered in Michigan. <span className="text-gradient">Working wherever you are.</span>
                </>
              }
              lead="We are remote-first across North America and Europe. Teams work overlapping hours with your core business day rather than expecting you to adapt to ours."
            />
            <address className="mt-8 not-italic">
              <div className="flex items-start gap-3.5 rounded-2xl border border-ink-100 bg-white p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white">
                  <Icon name="map-pin" className="h-5 w-5" strokeWidth={1.9} />
                </span>
                <div className="text-[0.9375rem] leading-relaxed text-ink-600">
                  <p className="font-bold text-ink-950">{site.legalName}</p>
                  <p className="mt-1.5">
                    {site.address.street}
                    <br />
                    {site.address.unit}
                    <br />
                    {site.address.city}, {site.address.regionCode} {site.address.postalCode}
                    <br />
                    {site.address.country}
                  </p>
                  <a href={`mailto:${site.email}`} className="link-arrow mt-4 text-sm">
                    {site.email}
                    <Icon name="arrow-up-right" className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </address>
          </Reveal>

          <Reveal from="right" delay={100}>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { value: '< 1 day', label: 'Typical reply time', icon: 'clock', accent: 'from-brand-500 to-indigo-500' },
                { value: '2–3 wks', label: 'To start an assessment', icon: 'calendar', accent: 'from-violet-500 to-blossom-500' },
                { value: '4–6 wks', label: 'To start a build', icon: 'rocket', accent: 'from-cyan-400 to-brand-500' },
                { value: '~30%', label: 'End with "do not proceed"', icon: 'megaphone', accent: 'from-emerald-400 to-cyan-500' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-ink-100 bg-white p-6 shadow-lift-sm">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br text-white ${item.accent}`}
                  >
                    <Icon name={item.icon} className="h-5 w-5" strokeWidth={1.9} />
                  </span>
                  <p className="mt-5 font-display text-2xl font-extrabold leading-none text-gradient">{item.value}</p>
                  <p className="mt-2 text-[0.875rem] font-medium text-ink-600">{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <FAQSection faqs={generalFaqs} eyebrow="Before you write" title="Questions we can answer here" tone="white" />

      <Section tone="mesh" size="sm" aria-label="Related pages">
        <RelatedLinks
          links={[
            { label: 'Services', href: '/services', description: 'Everything we deliver' },
            { label: 'Process', href: '/process', description: 'What an engagement looks like' },
            { label: 'Case studies', href: '/case-studies', description: 'Measured outcomes' },
            { label: 'Why choose us', href: '/why-choose-us', description: 'And when not to' },
            { label: 'Careers', href: '/careers', description: 'Looking for a role instead?' },
            { label: 'Partners', href: '/partners', description: 'Partnership enquiries' },
          ]}
        />
      </Section>
    </>
  );
}
