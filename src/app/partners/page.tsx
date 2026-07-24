import type { Metadata } from 'next';

import { PageHero } from '@/components/sections/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Icon, IconTile } from '@/components/ui/Icon';
import { RelatedLinks, CheckList, Badge } from '@/components/ui/Bits';
import { CTA } from '@/components/sections/CTA';
import { LogoCloud } from '@/components/sections/Blocks';
import { FAQSection } from '@/components/sections/FAQ';
import { GlobeArcs } from '@/components/visuals/Mockups';

import { partnerTypes, partnerPrograms } from '@/content/people';
import { ecosystem } from '@/content/social';
import { site } from '@/content/site';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Partners — Platforms, alliances and referral programmes',
  description:
    'Cloud, AI, security and enterprise platform relationships, plus referral, delivery and technology partner programmes with transparent commercial terms.',
  keywords: [
    'technology partners',
    'AWS partner',
    'Azure partner',
    'AI partners',
    'referral programme',
    'systems integrator partner',
    'delivery partner',
  ],
  path: '/partners',
  ogTitle: 'Partners who stay in their lane',
});

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title={
          <>
            Alliances that <span className="text-gradient">stay in their lane.</span>
          </>
        }
        lead="Platform relationships give our clients earlier access and a real escalation path. Referral and delivery partnerships come with written boundaries, because the fastest way to lose a partner is to quietly sell into their account."
        trail={[{ name: 'Partners', href: '/partners' }]}
        badge="Platform choice follows your constraints, never our commercial position"
        primaryCta={{ label: 'Discuss a partnership', href: '/contact' }}
        secondaryCta={{ label: 'See our stack', href: '/technologies' }}
        aurora="cool"
        visual={<GlobeArcs />}
      />

      {/* Platform partners */}
      <Section tone="mesh" aria-labelledby="platforms-heading">
        <Reveal>
          <SectionHeading
            id="platforms-heading"
            eyebrow="Platform relationships"
            title={
              <>
                Certifications, <span className="text-gradient">not just badges.</span>
              </>
            }
            lead="We hold current certifications across all three major clouds. What we do not do is let a partner tier decide your architecture."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {partnerTypes.map((type, index) => (
            <Reveal key={type.title} delay={index * 80} className="h-full">
              <div className="flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-7 shadow-lift-sm transition-all duration-500 ease-smooth hover:-translate-y-1 hover:shadow-lift sm:p-8">
                <IconTile name={type.icon} accent={type.accent} size="lg" />
                <h3 className="mt-6 font-display text-xl font-extrabold tracking-tight text-ink-950">{type.title}</h3>
                <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-500">{type.body}</p>
                <ul className="mt-6 flex flex-wrap gap-2 border-t border-ink-100 pt-5">
                  {type.items.map((item) => (
                    <li key={item}>
                      <Badge tone="neutral">{item}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Ecosystem marquee */}
      <Section tone="white" size="sm" bleed aria-label="Ecosystem">
        <div className="container-x mb-8">
          <p className="text-center text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-ink-400">
            Platforms we build on and integrate with
          </p>
        </div>
        <LogoCloud items={ecosystem} />
      </Section>

      {/* Programmes */}
      <Section tone="muted" aria-labelledby="programmes-heading">
        <Reveal>
          <SectionHeading
            id="programmes-heading"
            eyebrow="Partner programmes"
            title={
              <>
                Three ways to work with us, <span className="text-gradient">all of them written down.</span>
              </>
            }
            lead="Terms are agreed in writing before the first introduction. Nothing about our partner arrangements depends on goodwill and a handshake."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {partnerPrograms.map((program, index) => (
            <Reveal key={program.title} delay={index * 90} className="h-full">
              <div className="ring-gradient flex h-full flex-col rounded-3xl bg-white p-7 shadow-lift-sm sm:p-8">
                <IconTile name={program.icon} accent={program.accent} size="lg" />
                <h3 className="mt-6 font-display text-xl font-extrabold tracking-tight text-ink-950">
                  {program.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-500">{program.body}</p>
                <CheckList className="mt-6 border-t border-ink-100 pt-6" items={program.points} />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Commitments */}
      <Section tone="fresh" aria-labelledby="commitments-heading">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              id="commitments-heading"
              align="left"
              eyebrow="Our commitments"
              title={
                <>
                  What we promise partners <span className="text-gradient-fresh">in writing.</span>
                </>
              }
              lead="Most of these exist because we have seen the alternative go badly for somebody. They are contractual, not aspirational."
            />
          </Reveal>

          <Reveal from="right" delay={100}>
            <ul className="space-y-4">
              {[
                {
                  title: 'We do not approach your client for adjacent work',
                  body: 'If you introduce us for an AI engagement, we will not quietly propose a cloud migration six months later. Any expansion goes through you.',
                  icon: 'shield-check',
                },
                {
                  title: 'Scope boundaries are agreed before we start',
                  body: 'On joint delivery, the split of responsibility is documented and signed. We do not compete for scope mid-programme.',
                  icon: 'scale',
                },
                {
                  title: 'Commercial terms are transparent',
                  body: 'Referral fees, rate cards and margins are stated upfront. There is no version of our pricing you are not shown.',
                  icon: 'banknote',
                },
                {
                  title: 'We will tell you when we are the wrong fit',
                  body: 'If your client would be better served by someone else, we will say so rather than take the work and struggle.',
                  icon: 'megaphone',
                },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-6">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gradient-fresh text-white">
                    <Icon name={item.icon} className="h-5 w-5" strokeWidth={1.9} />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-ink-950">{item.title}</h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-500">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <FAQSection
        faqs={[
          {
            question: 'How do referral fees work?',
            answer:
              'A percentage of first-year engagement value, agreed in writing before the introduction and paid on our collection from the client. The percentage varies with how much of the scoping work you have already done. We will quote it before you introduce anyone, not after.',
          },
          {
            question: 'Will you white-label for us?',
            answer:
              'Yes, for delivery partnerships. We work under your brand with your governance and reporting cadence, and our people follow your engagement conventions. We ask only that the client knows a specialist subcontractor is involved — we will not misrepresent who is in the room.',
          },
          {
            question: 'Do you compete with systems integrators?',
            answer:
              'Rarely, and deliberately. We are usually the AI, automation or security specialist inside a larger programme somebody else is running. We do not have a general systems integration practice and we are not trying to build one.',
          },
          {
            question: 'Can technology vendors partner with you?',
            answer:
              'Yes. We build reference implementations and integration accelerators around products our clients use, and we provide honest product feedback from the field. That feedback is genuinely honest, which some vendors find less appealing than they expected.',
          },
          {
            question: 'What do you need from a partner to start?',
            answer:
              'A conversation about where the boundary sits, a written agreement covering scope and commercials, and a named contact on each side. We can usually get from first conversation to signed terms in two to three weeks.',
          },
        ]}
        eyebrow="Partnership questions"
        title="How partnerships work here"
        tone="white"
      />

      <Section tone="white" size="sm" aria-label="Related pages">
        <RelatedLinks
          links={[
            { label: 'Technologies', href: '/technologies', description: 'The platforms we build on' },
            { label: 'Services', href: '/services', description: 'What we deliver' },
            { label: 'Case studies', href: '/case-studies', description: 'Joint delivery outcomes' },
            { label: 'About', href: '/about', description: 'Who you would be partnering with' },
            { label: 'Process', href: '/process', description: 'How we run engagements' },
            { label: 'Contact', href: '/contact', description: 'Start a conversation' },
          ]}
        />
      </Section>

      <CTA
        eyebrow="Partner with us"
        title="Bring us the engagement you cannot staff."
        body={`Tell us where the boundary should sit and we will put terms in writing within a fortnight. Direct line: ${site.email}`}
        primary={{ label: 'Discuss a partnership', href: '/contact' }}
        secondary={{ label: 'See our stack', href: '/technologies' }}
        points={[
          'Written scope boundaries before anything starts',
          'We never approach your client for adjacent work',
          'Transparent commercials, quoted before introductions',
        ]}
      />
    </>
  );
}
