import type { Metadata } from 'next';
import Link from 'next/link';

import { PageHero } from '@/components/sections/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Icon, IconTile } from '@/components/ui/Icon';
import { RelatedLinks, CheckList, Badge, JsonLd } from '@/components/ui/Bits';
import { CTA } from '@/components/sections/CTA';
import { FeatureGrid } from '@/components/sections/Blocks';
import { FAQSection } from '@/components/sections/FAQ';
import { MetricPanel } from '@/components/visuals/Panels';

import { careerBeliefs, benefits, openRoles, hiringProcess } from '@/content/people';
import { site } from '@/content/site';
import { buildMetadata } from '@/lib/seo';
import { graph, collectionSchema } from '@/lib/schema';

export const metadata: Metadata = buildMetadata({
  title: 'Careers — Build the systems that run companies',
  description:
    'Remote-first roles across AI engineering, platform, security, design and delivery. Senior people who write code, ten percent research time, and salary bands published internally.',
  keywords: [
    'AI engineer jobs',
    'remote engineering jobs',
    'platform engineer careers',
    'security engineer jobs',
    'product designer jobs',
    'CyberXSolutions careers',
  ],
  path: '/careers',
  ogTitle: 'Build the systems that run companies',
});

export default function CareersPage() {
  return (
    <>
      <JsonLd
        data={graph(
          collectionSchema({
            name: 'Open roles at CyberXSolutions',
            description: 'Remote-first engineering, security, design and delivery roles.',
            path: '/careers',
            items: openRoles.map((role) => ({ name: role.title, href: '/careers' })),
          }),
        )}
      />

      <PageHero
        eyebrow="Careers"
        title={
          <>
            Build the systems <span className="text-gradient">that run companies.</span>
          </>
        }
        lead="Not demos. Not decks. Systems with real authority inside real businesses, where being wrong is expensive and being right is measurable. If that sounds like pressure rather than fun, we are probably not the right place."
        trail={[{ name: 'Careers', href: '/careers' }]}
        badge="Remote-first across North America and Europe"
        primaryCta={{ label: 'See open roles', href: '#roles' }}
        secondaryCta={{ label: 'About us', href: '/about' }}
        aurora="warm"
        visual={
          <MetricPanel
            label="How we work"
            badge="Remote-first"
            headline={{ value: '10%', caption: 'Of your time is yours, with a budget attached', delta: 'Not a slogan' }}
            rows={[
              { label: 'Meeting-light days per week', value: '2', ratio: 40, accent: 'orange' },
              { label: 'Salary bands published internally', value: 'All', ratio: 100, accent: 'violet' },
              { label: 'Parental leave, every parent', value: '16 weeks', ratio: 80, accent: 'emerald' },
              { label: 'Hiring decision after final session', value: '≤ 5 days', ratio: 90, accent: 'blue' },
            ]}
            metrics={[
              { value: '4 wks', label: 'Minimum leave' },
              { value: '4', label: 'Quarterly gatherings' },
              { value: '0', label: 'Unpaid take-homes' },
            ]}
          />
        }
      />

      {/* Beliefs */}
      <Section tone="mesh" aria-labelledby="beliefs-heading">
        <Reveal>
          <SectionHeading
            id="beliefs-heading"
            eyebrow="What it is like here"
            title={
              <>
                Six things that are true, <span className="text-gradient">including the demanding ones.</span>
              </>
            }
            lead="Written so you can rule us out quickly if it does not fit. That is a legitimate outcome and it saves everyone a fortnight."
          />
        </Reveal>
        <FeatureGrid
          className="mt-14"
          columns={3}
          features={careerBeliefs.map((belief) => ({
            title: belief.title,
            body: belief.body,
            icon: belief.icon,
            accent: belief.accent,
          }))}
        />
      </Section>

      {/* Benefits */}
      <Section tone="white" aria-labelledby="benefits-heading">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <Reveal>
            <SectionHeading
              id="benefits-heading"
              align="left"
              eyebrow="The package"
              title={
                <>
                  Specific numbers, <span className="text-gradient">not adjectives.</span>
                </>
              }
              lead="Every benefit below is written the way it appears in our handbook. If something is a range, we say so rather than calling it competitive."
            />
          </Reveal>

          <Reveal from="right" delay={100}>
            <div className="rounded-3xl border border-ink-100 bg-ink-50/60 p-7 sm:p-9">
              <CheckList items={benefits} columns={1} />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Roles */}
      <Section id="roles" tone="muted" aria-labelledby="roles-heading">
        <Reveal>
          <SectionHeading
            id="roles-heading"
            eyebrow="Open roles"
            title={
              <>
                Six roles. <span className="text-gradient">All senior, all remote.</span>
              </>
            }
            lead="We hire for judgement over tool knowledge. If you are close but not exact on the requirements, apply anyway and tell us which part you would need to learn."
          />
        </Reveal>

        <div className="mt-14 space-y-4">
          {openRoles.map((role, index) => (
            <Reveal key={role.title} delay={index * 70}>
              <article className="ring-gradient rounded-3xl bg-white p-7 shadow-lift-sm transition-all duration-500 ease-smooth hover:-translate-y-1 hover:shadow-lift sm:p-8">
                <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12">
                  <div>
                    <div className="flex items-start gap-4">
                      <IconTile name={role.icon} accent={role.accent} size="lg" />
                      <div className="min-w-0">
                        <h3 className="font-display text-xl font-extrabold tracking-tight text-ink-950">
                          {role.title}
                        </h3>
                        <div className="mt-2.5 flex flex-wrap gap-2">
                          <Badge tone="neutral" icon="briefcase">
                            {role.team}
                          </Badge>
                          <Badge tone="neutral" icon="map-pin">
                            {role.location}
                          </Badge>
                          <Badge tone="neutral" icon="clock">
                            {role.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <p className="mt-5 text-[0.9375rem] leading-relaxed text-ink-500">{role.summary}</p>
                  </div>

                  <div className="rounded-2xl border border-ink-100 bg-ink-50/60 p-6">
                    <h4 className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-ink-500">
                      What we are looking for
                    </h4>
                    <CheckList className="mt-4" items={role.looking} />
                    <a
                      href={`mailto:${site.email}?subject=${encodeURIComponent(`Application — ${role.title}`)}`}
                      className="btn btn-secondary btn-sm mt-6 w-full"
                    >
                      Apply for this role
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 rounded-3xl border border-dashed border-brand-200 bg-brand-50/50 p-7 text-center sm:p-9">
            <h3 className="font-display text-xl font-extrabold tracking-tight text-ink-950">
              None of these quite fit?
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-ink-600">
              We keep a standing open application. Tell us what you would want to own here and what you have shipped
              that proves you could. We read all of them, and we reply either way.
            </p>
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent('Open application')}`}
              className="btn btn-primary btn-md mt-6"
            >
              <span className="relative z-10">Send an open application</span>
            </a>
          </div>
        </Reveal>
      </Section>

      {/* Hiring process */}
      <Section tone="white" aria-labelledby="hiring-heading">
        <Reveal>
          <SectionHeading
            id="hiring-heading"
            eyebrow="How hiring works"
            title={
              <>
                Four conversations. <span className="text-gradient">None of them free work.</span>
              </>
            }
            lead="We do not set unpaid take-home projects and we do not ask algorithm puzzles. Everything you do in our process is a real problem from our domain, worked through with someone who does the job."
          />
        </Reveal>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {hiringProcess.map((step, index) => (
            <Reveal
              key={step.title}
              as="li"
              delay={index * 90}
              className="h-full rounded-3xl border border-ink-100 bg-white p-7 shadow-lift-sm"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-gradient font-mono text-xs font-bold text-white shadow-glow">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="font-mono text-eyebrow uppercase text-ink-400">{step.meta}</span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink-950">{step.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-500">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <FAQSection
        faqs={[
          {
            question: 'Is this genuinely remote, or remote-until-someone-changes-their-mind?',
            answer:
              'Genuinely remote. We have no headquarters and no team is co-located, so nobody accumulates the informal advantage of being in a room. We gather in person once a quarter with travel covered, and those are worth flying for.',
          },
          {
            question: 'What are the working hours?',
            answer:
              'Flexible, with an expectation of overlap with your teammates and clients for a few hours a day. Two days a week are protected as meeting-light. We are strict about people being genuinely offline when they are off, including during on-call rotations that are compensated separately.',
          },
          {
            question: 'How much client-facing work is there?',
            answer:
              'A meaningful amount, in every engineering role. Our model depends on the people who build the system also being the people who explain it. If you would rather never speak to a client, this will not suit you.',
          },
          {
            question: 'Do you sponsor visas or hire contractors?',
            answer:
              'We hire employees where we have an entity and contractors elsewhere, both on the same salary bands. We do not currently sponsor visas, and we say that upfront rather than at offer stage.',
          },
          {
            question: 'What does the craft session involve?',
            answer:
              'Ninety minutes on a real problem from our domain — an agent that is failing an evaluation, a workflow with an ambiguous exception, an architecture with a cost problem. You work it through with one of our engineers. There is no correct answer we are waiting for; we are watching how you reason.',
          },
          {
            question: 'How are salaries decided?',
            answer:
              'Benchmarked to the top quartile for the role and level, in published internal bands with no negotiation premium for being a confident negotiator. Reviewed annually. We tell you the band and the reasoning at offer.',
          },
        ]}
        eyebrow="Candidate questions"
        title="What people ask before applying"
        tone="mesh"
      />

      <Section tone="white" size="sm" aria-label="Related pages">
        <RelatedLinks
          links={[
            { label: 'About', href: '/about', description: 'What we believe' },
            { label: 'Process', href: '/process', description: 'How we deliver' },
            { label: 'Technologies', href: '/technologies', description: 'What you would work with' },
            { label: 'Case studies', href: '/case-studies', description: 'The work you would join' },
            { label: 'Blog', href: '/blog', description: 'How we think, in writing' },
            { label: 'Contact', href: '/contact', description: 'Ask us anything' },
          ]}
        />
      </Section>

      <CTA
        eyebrow="Join us"
        title="Tell us what you would want to own here."
        body="Even without a matching role open. We read every open application and reply either way — usually within a week."
        primary={{ label: 'See open roles', href: '/careers#roles' }}
        secondary={{ label: 'Read about us', href: '/about' }}
        points={[
          'Four conversations, none of them unpaid project work',
          'Decision within five working days of the final session',
          'Salary band and reasoning explained at offer',
        ]}
      />
    </>
  );
}
