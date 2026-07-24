import type { Metadata } from 'next';

import { PageHero } from '@/components/sections/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Icon, IconTile } from '@/components/ui/Icon';
import { RelatedLinks } from '@/components/ui/Bits';
import { CTA } from '@/components/sections/CTA';
import { FeatureGrid, LogoCloud } from '@/components/sections/Blocks';
import { FAQSection } from '@/components/sections/FAQ';
import { BlueprintPanel } from '@/components/visuals/Mockups';

import { techStack, techPrinciples, integrations } from '@/content/technologies';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Technologies — The stack behind the systems',
  description:
    'Models, agent orchestration, languages, cloud, security and observability. What we build on, why we picked it, and the principle that keeps you free to leave.',
  keywords: [
    'technology stack',
    'AI tech stack',
    'Next.js development',
    'Kubernetes',
    'Terraform',
    'LangGraph',
    'enterprise integrations',
    'AI orchestration',
  ],
  path: '/technologies',
  ogTitle: 'We pick boring on purpose.',
});

export default function TechnologiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Technologies"
        title={
          <>
            We pick boring <span className="text-gradient">on purpose.</span>
          </>
        }
        lead="Novel technology carries a maintenance tax your team pays for years after we leave. We use the interesting option only where it clearly beats the boring one — and we write down why in a decision record you can read."
        trail={[{ name: 'Technologies', href: '/technologies' }]}
        badge="No proprietary runtime. Nothing you cannot leave."
        secondaryCta={{ label: 'See how we deliver', href: '/process' }}
        aurora="cool"
        visual={
          <BlueprintPanel
            title="Reference architecture"
            layers={[
              { heading: 'Intelligence', note: 'model-agnostic', accent: 'violet', items: ['Claude', 'GPT', 'Open weights', 'Embeddings'] },
              { heading: 'Orchestration', note: 'durable execution', accent: 'blue', items: ['LangGraph', 'Temporal', 'MCP', 'Queues'] },
              { heading: 'Application', note: 'typed end to end', accent: 'cyan', items: ['TypeScript', 'Python', 'Next.js', 'FastAPI'] },
              { heading: 'Platform', note: 'reproducible from code', accent: 'emerald', items: ['Kubernetes', 'Terraform', 'Postgres', 'OpenTelemetry'] },
            ]}
          />
        }
      />

      {/* Principles */}
      <Section tone="mesh" aria-labelledby="principles-heading">
        <Reveal>
          <SectionHeading
            id="principles-heading"
            eyebrow="How we choose"
            title={
              <>
                Four rules that decide <span className="text-gradient">what goes in the stack.</span>
              </>
            }
            lead="Applied to our own work as strictly as to yours. We have retired plenty of our own choices when something better cleared the bar."
          />
        </Reveal>
        <FeatureGrid
          className="mt-14"
          columns={4}
          features={techPrinciples.map((principle, index) => ({
            title: principle.title,
            body: principle.body,
            icon: principle.icon,
            accent: (['blue', 'violet', 'cyan', 'emerald'] as const)[index],
          }))}
        />
      </Section>

      {/* Stack */}
      <Section tone="white" aria-labelledby="stack-heading">
        <Reveal>
          <SectionHeading
            id="stack-heading"
            eyebrow="The stack"
            title={
              <>
                Twelve layers. <span className="text-gradient">Every one of them replaceable.</span>
              </>
            }
            lead="Your system is built so that swapping a model, a database or a cloud is a configuration change and a migration plan — not a rewrite."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techStack.map((group, index) => (
            <Reveal key={group.heading} delay={index * 60} className="h-full">
              <div className="flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-7 shadow-lift-sm transition-all duration-500 ease-smooth hover:-translate-y-1 hover:shadow-lift">
                <IconTile name={group.icon} accent={group.accent} />
                <h3 className="mt-5 font-display text-lg font-extrabold tracking-tight text-ink-950">
                  {group.heading}
                </h3>
                <p className="mt-2.5 text-[0.875rem] leading-relaxed text-ink-500">{group.blurb}</p>
                <ul className="mt-5 flex flex-wrap gap-2 border-t border-ink-100 pt-5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-ink-100 bg-ink-50/70 px-2.5 py-1.5 text-[0.8125rem] font-medium text-ink-700 transition-colors duration-300 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Integrations */}
      <Section tone="muted" aria-labelledby="integrations-heading" bleed>
        <div className="container-x">
          <Reveal>
            <SectionHeading
              id="integrations-heading"
              eyebrow="Integrations"
              title={
                <>
                  The systems of record <span className="text-gradient">we have already connected.</span>
                </>
              }
              lead="Connectors written once, tested, and reused — so your second integration is not a repeat of the first."
            />
          </Reveal>
        </div>
        <div className="mt-14 space-y-4">
          <LogoCloud items={integrations.slice(0, 12)} />
          <LogoCloud items={integrations.slice(12)} />
        </div>
      </Section>

      <FAQSection
        faqs={[
          {
            question: 'Which AI model do you recommend?',
            answer:
              'Whichever wins the evaluation for your specific workload, and it is rarely the same model for every step. We route cheap classification to small fast models and reserve frontier models for genuine reasoning. More importantly, we build so that swapping a model is a configuration change — the leaderboard changes every few months and your architecture should not care.',
          },
          {
            question: 'Can everything run inside our own infrastructure?',
            answer:
              'Yes. We deploy into your cloud account or on-premises, with open-weight models served locally where data residency or regulation requires it. Expect a measurable trade-off on the hardest reasoning steps, and we will quantify it against your workload before you decide rather than after.',
          },
          {
            question: 'Do you use low-code or automation platforms?',
            answer:
              'Where they genuinely fit, yes. But business logic locked inside a low-code canvas is hard to review, test and version, and per-task pricing gets punishing at volume. We will show you the maths on both maintainability and cost rather than defaulting to a preference.',
          },
          {
            question: 'What if we already have a technology standard?',
            answer:
              'We build within it. Your standard exists because your team can support it, and that matters more than our preferences. Where a standard would genuinely prevent the outcome you want, we will say so with the specific reason and let you decide.',
          },
          {
            question: 'How do you stay current without chasing every release?',
            answer:
              'A new model or tool enters our stack after it beats the incumbent on a real workload, measured on a benchmark we control. Announcements are not evidence. We also retire our own work when something better clears the bar — including work we were proud of.',
          },
        ]}
        eyebrow="Technology questions"
        title="What CTOs ask about the stack"
        tone="white"
      />

      <Section tone="white" size="sm" aria-label="Related pages">
        <RelatedLinks
          links={[
            { label: 'Custom Software', href: '/custom-software-development', description: 'Systems built on this stack' },
            { label: 'Cloud Engineering', href: '/cloud-engineering', description: 'Infrastructure and platform' },
            { label: 'AI Agents', href: '/ai-agents', description: 'Agent runtimes and evaluation' },
            { label: 'AI Cybersecurity', href: '/ai-cybersecurity', description: 'Security tooling' },
            { label: 'Process', href: '/process', description: 'How we deliver' },
            { label: 'Contact', href: '/contact', description: 'Talk architecture with us' },
          ]}
        />
      </Section>

      <CTA
        title="Bring your architecture and we will tell you what we would change."
        body="Ninety minutes with our engineers looking at your actual stack. You get a written view on what is holding you back and what we would leave alone."
        secondary={{ label: 'See the process', href: '/process' }}
      />
    </>
  );
}
