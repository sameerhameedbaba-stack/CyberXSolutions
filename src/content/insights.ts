export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  accent: 'blue' | 'violet' | 'cyan' | 'emerald' | 'orange' | 'pink' | 'indigo';
  icon: string;
  featured?: boolean;
  /** Section headings + paragraphs. Kept structured so schema and TOC stay in sync. */
  body: { heading: string; paragraphs: string[]; list?: string[] }[];
};

export const posts: Post[] = [
  {
    slug: 'why-ai-pilots-do-not-reach-production',
    title: 'Why your AI pilot never reached production',
    excerpt:
      'It is almost never the model. After forty-plus enterprise engagements, the failure is the same four things every time — and none of them are technical.',
    category: 'Enterprise AI',
    readTime: '8 min read',
    date: '2026-06-18',
    author: 'CyberXSolutions Engineering',
    accent: 'violet',
    icon: 'enterprise',
    featured: true,
    body: [
      {
        heading: 'The pilot worked. That was the problem.',
        paragraphs: [
          'A successful pilot proves a model can do a task under supervision on a curated sample. Production asks a much harder question: can this run unattended, on your worst data, at your real volume, with someone accountable when it is wrong?',
          'Most organisations never make that second question explicit. So the pilot succeeds, everyone is encouraged, and the project quietly stalls at the point where somebody has to sign their name against an automated decision.',
        ],
      },
      {
        heading: 'Failure one: nobody owned the operating change',
        paragraphs: [
          'The technology team owns the model. The business team owns the process. Between them sits the actual change — new exception handling, new role definitions, new approval routes — and it belongs to nobody.',
          'The fix is unglamorous. Name a business owner for each use case before build starts, with the authority to change the process and the accountability for the outcome. Systems without a named owner do not reach production regardless of how good the model is.',
        ],
      },
      {
        heading: 'Failure two: security review had no fast lane',
        paragraphs: [
          'When every AI project queues behind the same eleven-week review regardless of risk, teams stop proposing them. We have watched pipelines unblock the moment a three-tier risk framework with a genuine fast lane was introduced — low-risk patterns clearing in four days rather than a quarter.',
          'This is not about lowering the bar. It is about not applying the bar for a customer-facing credit decision to an internal document summariser.',
        ],
      },
      {
        heading: 'Failure three: the business case was never re-tested',
        paragraphs: [
          'The case is written to secure funding and then never opened again. Nobody measures whether the projected saving arrived, so nobody learns which estimates were optimistic, so the next case repeats the same errors.',
          'Make benefit verification mandatory ninety days after launch, publish the result internally, and accept that some of them will read badly. That discipline is what makes the fourth business case credible.',
        ],
      },
      {
        heading: 'Failure four: the second use case cost as much as the first',
        paragraphs: [
          'Every team solving its own integration, its own evaluation tooling and its own model access means AI never gets cheaper. Extract the platform from the use cases that actually shipped rather than designing one in advance, and the tenth costs a fraction of the first.',
        ],
        list: [
          'Name a business owner with real authority for every use case',
          'Build a tiered risk framework with a fast lane that actually moves',
          'Verify benefits at 90 days and publish the result, good or bad',
          'Extract shared platform components from what shipped, not from a whiteboard',
        ],
      },
    ],
  },
  {
    slug: 'what-guardrails-actually-mean',
    title: 'What "guardrails" actually means when an agent has API access',
    excerpt:
      'The word appears in every AI vendor deck and almost never survives contact with a security review. Here is the concrete list we implement.',
    category: 'AI Agents',
    readTime: '10 min read',
    date: '2026-05-22',
    author: 'CyberXSolutions Engineering',
    accent: 'emerald',
    icon: 'lock',
    body: [
      {
        heading: 'A prompt is not a control',
        paragraphs: [
          'Telling a model not to do something is a suggestion, not a boundary. If the only thing preventing an agent from issuing a refund is an instruction in its system prompt, you do not have a control — you have a hope with good grammar.',
          'Real guardrails are enforced outside the model, in code the model cannot influence.',
        ],
      },
      {
        heading: 'Layer one: capability boundaries',
        paragraphs: [
          'An agent can only call the tools it has been granted, and each tool is a typed function with validated inputs. If it invents an account number, schema validation rejects it before anything reaches your ERP. Deny by default, grant explicitly, scope per environment.',
        ],
      },
      {
        heading: 'Layer two: value and confidence thresholds',
        paragraphs: [
          'Every action carries a value and a confidence. Below thresholds you set, it executes. Above them, it routes to a named approver with the full reasoning trail attached. Thresholds are configuration, not code, so operations can tighten them without a release.',
        ],
      },
      {
        heading: 'Layer three: policy evaluation',
        paragraphs: [
          'Before execution, the proposed action is checked against policy: is this counterparty on the approved list, is this within budget, does this require dual approval, is it outside business hours. Policy lives in one place and applies to every agent uniformly.',
        ],
      },
      {
        heading: 'Layer four: reversibility',
        paragraphs: [
          'If an action can be taken automatically, the reverse should also be automatic. We build the undo path alongside the do path. It is the difference between an incident that takes four minutes to resolve and one that takes a fortnight.',
        ],
        list: [
          'Scoped, revocable credentials per tool and per environment',
          'Schema-validated inputs so invented values fail closed',
          'Configurable value and confidence thresholds',
          'Centralised policy evaluation before execution',
          'A tested reverse path for every automated action',
          'Immutable audit records for every step, tool call and token',
        ],
      },
    ],
  },
  {
    slug: 'seo-in-the-age-of-ai-answers',
    title: 'SEO when the answer appears above the results',
    excerpt:
      'Zero-click is real and rising. That does not make search irrelevant — it changes what winning looks like, and most content strategies have not adjusted.',
    category: 'Search',
    readTime: '7 min read',
    date: '2026-04-30',
    author: 'CyberXSolutions Growth',
    accent: 'cyan',
    icon: 'search',
    body: [
      {
        heading: 'Being the source beats being the result',
        paragraphs: [
          'AI answers are assembled from indexed content and they cite what they use. The strategic question has shifted from "how do we rank" to "how do we become the thing worth citing".',
          'That rewards a specific kind of content: original data nobody else has, clear sourcing, and structure a machine can parse into a defensible claim.',
        ],
      },
      {
        heading: 'What actually gets cited',
        paragraphs: [
          'In our tracking across client programmes, the pages that get quoted share four properties. They answer a specific question in the first two sentences. They contain a number or a definition that is attributable. They cite their own sources. And they are technically accessible — server-rendered, fast, and marked up properly.',
        ],
        list: [
          'Answer the question in the first two sentences, not the sixth paragraph',
          'Publish original data — a survey, a benchmark, an aggregate from your own operations',
          'Cite your sources so a machine can verify the claim',
          'Use structured data properly: article, FAQ, organisation, breadcrumb',
          'Server-render. Content behind client-side JavaScript is content you might not own',
        ],
      },
      {
        heading: 'The technical foundation matters more, not less',
        paragraphs: [
          'We regularly find sites where two thirds of commercial pages are never reliably indexed because of rendering choices. No content strategy survives that. Fix crawl and render first — it is unglamorous, it produces nothing to show a board, and it is usually the single biggest gain available.',
        ],
      },
    ],
  },
  {
    slug: 'the-automation-that-should-not-exist',
    title: 'The most valuable automation is the one you delete',
    excerpt:
      'Roughly a fifth of the process steps we are asked to automate should not exist at all. Automating them makes waste faster and much harder to see.',
    category: 'Automation',
    readTime: '6 min read',
    date: '2026-03-14',
    author: 'CyberXSolutions Engineering',
    accent: 'blue',
    icon: 'automation',
    body: [
      {
        heading: 'Why the step exists',
        paragraphs: [
          'Ask why a step exists and the honest answer is often historical: a system could not do something in 2014, so a person did it, and the person is still doing it in 2026. The system was replaced twice in between.',
          'Automating that step encodes a decade-old constraint into software that will outlive everyone who remembers the reason.',
        ],
      },
      {
        heading: 'The three questions we ask before automating anything',
        paragraphs: [
          'What decision does this step actually change? What happens if we simply stop doing it? And who would notice — with a name, not a department.',
          'A surprising number of steps fail all three. Those get removed, and the removal delivers more value than any automation would have.',
        ],
        list: [
          'What decision does this step change?',
          'What breaks if we stop doing it entirely?',
          'Who specifically would notice, by name?',
        ],
      },
      {
        heading: 'Redesign, then automate',
        paragraphs: [
          'We build a redesign phase into every automation engagement precisely so this happens before code. It typically removes 15–25% of the steps, which reduces build cost, reduces ongoing maintenance, and makes the remaining automation dramatically simpler to reason about.',
        ],
      },
    ],
  },
  {
    slug: 'measuring-security-automation',
    title: 'Tune before you automate: a note on alert queues',
    excerpt:
      'Automating triage on a queue that is 91% false positive does not save your analysts. It industrialises the wrong conclusion.',
    category: 'Security',
    readTime: '6 min read',
    date: '2026-02-08',
    author: 'CyberXSolutions Security',
    accent: 'orange',
    icon: 'radar',
    body: [
      {
        heading: 'The tempting shortcut',
        paragraphs: [
          'A security team drowning in alerts is the clearest automation case there is, which is exactly why it gets rushed. The instinct is to point AI at the queue immediately and measure the reduction in human review.',
          'That metric will look excellent and mean nothing, because you have automated a triage process that was already producing the wrong answer most of the time.',
        ],
      },
      {
        heading: 'Three weeks of unglamorous tuning first',
        paragraphs: [
          'In our engagements we spend two to three weeks reducing false positives before automating anything: detection tuning, suppression of known-benign patterns, and correlation that turns four weak signals into one strong case.',
          'Only then do we let agents triage — and their accuracy is measured against the tuned baseline, not the original noise.',
        ],
      },
      {
        heading: 'What to measure instead',
        paragraphs: [
          'Reduction in alerts reaching humans is a vanity metric on its own. Pair it with investigation depth — what proportion of alerts received a full context review — and with detection recall measured through purple-team exercises. If depth is rising and recall is holding, the automation is genuinely working.',
        ],
        list: [
          'False positive rate before and after tuning, measured separately from automation',
          'Investigation depth: proportion receiving full context review',
          'Detection recall validated by purple-team exercise, not by self-report',
          'Mean time to contain, split by whether a human was involved',
        ],
      },
    ],
  },
  {
    slug: 'build-versus-buy',
    title: 'When we tell clients not to build',
    excerpt:
      'We turn down build work often enough that it is a standing possible outcome of discovery rather than a courtesy. Here is the test we apply.',
    category: 'Engineering',
    readTime: '5 min read',
    date: '2026-01-16',
    author: 'CyberXSolutions Engineering',
    accent: 'indigo',
    icon: 'scale',
    body: [
      {
        heading: 'The default answer is buy',
        paragraphs: [
          'Commercial software is cheaper than custom software for anything that is not a source of competitive advantage. That is not a controversial statement, and yet build decisions are routinely made on the strength of a 70% feature match and an unexamined dislike of the vendor.',
        ],
      },
      {
        heading: 'Three conditions that justify building',
        paragraphs: [
          'We build when the process is genuinely differentiating, when no product fits without workarounds that cost more than the licence, or when integration and data ownership requirements make a product structurally unsuitable.',
          'Two out of three is usually not enough. One out of three almost never is.',
        ],
        list: [
          'The process is a real source of competitive advantage',
          'No product fits without workarounds that cost more than the licence',
          'Data ownership or integration requirements rule products out structurally',
        ],
      },
      {
        heading: 'The honest cost comparison',
        paragraphs: [
          'Most build-versus-buy analyses compare licence cost to build cost and stop there. Include five years of maintenance, the opportunity cost of the engineers, and the risk-adjusted cost of the project running long — and a lot of build decisions reverse.',
          'We produce that comparison during discovery whether or not it favours us.',
        ],
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export const resourceItems: {
  title: string;
  description: string;
  type: string;
  icon: string;
  accent: 'blue' | 'violet' | 'cyan' | 'emerald' | 'orange' | 'pink' | 'indigo';
  href: string;
  meta: string;
}[] = [
  {
    title: 'AI readiness assessment',
    description:
      'The forty-question diagnostic we run at the start of every enterprise engagement, covering data, platform, governance and operating model. Score yourself before you spend anything.',
    type: 'Framework',
    icon: 'list-checks',
    accent: 'blue',
    href: '/contact',
    meta: '40 questions · self-scored',
  },
  {
    title: 'Agent guardrail specification',
    description:
      'The concrete control list we implement whenever an agent gets API access — capability boundaries, thresholds, policy evaluation and reversibility. Written to survive a security review.',
    type: 'Specification',
    icon: 'lock',
    accent: 'emerald',
    href: '/blog/what-guardrails-actually-mean',
    meta: 'Reference implementation',
  },
  {
    title: 'Automation payback calculator',
    description:
      'The model we use to rank automation candidates: volume, handling time, error rate, rework cost and exception profile, producing a payback period rather than a feeling.',
    type: 'Model',
    icon: 'gauge',
    accent: 'violet',
    href: '/contact',
    meta: 'Spreadsheet model',
  },
  {
    title: 'Enterprise AI governance starter',
    description:
      'A three-tier risk framework with pre-approved patterns and a genuine fast lane, mapped to NIST AI RMF and EU AI Act obligations.',
    type: 'Framework',
    icon: 'scale',
    accent: 'indigo',
    href: '/enterprise-solutions',
    meta: 'Policy templates',
  },
  {
    title: 'Core Web Vitals budget template',
    description:
      'The CI configuration we use to fail builds that regress performance, plus the budget thresholds we set for enterprise marketing platforms.',
    type: 'Template',
    icon: 'bolt',
    accent: 'cyan',
    href: '/web-development',
    meta: 'CI configuration',
  },
  {
    title: 'Migration protection checklist',
    description:
      'Every step we run before, during and after a replatform to prevent organic traffic loss — redirect mapping, schema parity, crawl comparison and monitoring.',
    type: 'Checklist',
    icon: 'shield-check',
    accent: 'orange',
    href: '/seo',
    meta: '38-point checklist',
  },
];
