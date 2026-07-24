import Link from 'next/link';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Accordion, type FaqItem } from '@/components/ui/Accordion';
import { Reveal } from '@/components/ui/Reveal';
import { JsonLd } from '@/components/ui/Bits';
import { faqSchema, graph } from '@/lib/schema';
import { Icon } from '@/components/ui/Icon';
import { site } from '@/content/site';

export function FAQSection({
  faqs,
  eyebrow = 'Questions',
  title = 'The things buyers actually ask',
  lead,
  id = 'faq',
  tone = 'muted',
}: {
  faqs: FaqItem[];
  eyebrow?: string;
  title?: string;
  lead?: string;
  id?: string;
  tone?: 'white' | 'muted' | 'mesh';
}) {
  return (
    <Section id={id} tone={tone} aria-labelledby={`${id}-heading`}>
      <JsonLd data={graph(faqSchema(faqs))} />
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <SectionHeading
              id={`${id}-heading`}
              align="left"
              eyebrow={eyebrow}
              title={title}
              lead={lead}
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8 rounded-2xl border border-ink-100 bg-white p-6">
              <p className="text-[0.9375rem] font-semibold text-ink-900">Still deciding?</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                Send the question to a senior engineer instead of a form. You will get a straight answer, and
                a no if that is the honest one.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                <Link href="/contact" className="link-arrow text-sm">
                  Talk to us
                  <Icon name="arrow-right" className="h-4 w-4" />
                </Link>
                <a href={`mailto:${site.email}`} className="text-sm font-semibold text-ink-500 transition-colors hover:text-brand-600">
                  {site.email}
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <Accordion items={faqs} />
        </Reveal>
      </div>
    </Section>
  );
}
