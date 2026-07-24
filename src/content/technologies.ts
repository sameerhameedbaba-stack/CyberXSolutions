export const techStack: { heading: string; blurb: string; icon: string; accent: 'blue' | 'violet' | 'cyan' | 'emerald' | 'orange' | 'pink' | 'indigo'; items: string[] }[] = [
  {
    heading: 'Models & reasoning',
    blurb: 'Chosen per workload by evaluation, never by preference. Swapping one is configuration, not a rewrite.',
    icon: 'brain',
    accent: 'violet',
    items: ['Claude', 'GPT', 'Gemini', 'Llama', 'Mistral', 'Qwen', 'Embedding models', 'Self-hosted open weights'],
  },
  {
    heading: 'Agent & orchestration',
    blurb: 'Durable execution, planning loops and tool routing that survive a failure halfway through.',
    icon: 'workflow',
    accent: 'blue',
    items: ['LangGraph', 'Temporal', 'Model Context Protocol', 'AWS Step Functions', 'Airflow', 'Custom runtimes'],
  },
  {
    heading: 'Languages',
    blurb: 'Typed where it matters. We pick the language that fits the problem and the people who will maintain it.',
    icon: 'code',
    accent: 'cyan',
    items: ['TypeScript', 'Python', 'Go', 'Rust', 'C#', 'Swift', 'Kotlin', 'SQL'],
  },
  {
    heading: 'Application frameworks',
    blurb: 'Server-rendered by default, accessible by default, fast on the hardware people actually own.',
    icon: 'web',
    accent: 'indigo',
    items: ['Next.js', 'React', 'Astro', 'NestJS', 'FastAPI', 'Django', '.NET', 'Tailwind CSS'],
  },
  {
    heading: 'Mobile',
    blurb: 'Native where platform depth matters, shared core where the economics are better.',
    icon: 'mobile',
    accent: 'pink',
    items: ['Swift / SwiftUI', 'Kotlin / Compose', 'React Native', 'Flutter', 'Expo', 'Kotlin Multiplatform'],
  },
  {
    heading: 'Data & storage',
    blurb: 'Schemas designed for the volume you will have, not the volume you have today.',
    icon: 'database',
    accent: 'emerald',
    items: ['PostgreSQL', 'pgvector', 'ClickHouse', 'Snowflake', 'Databricks', 'Kafka', 'Redis', 'Elasticsearch', 'dbt'],
  },
  {
    heading: 'Cloud & platform',
    blurb: 'Everything in code. If an environment cannot be rebuilt from a repository, it is not finished.',
    icon: 'cloud',
    accent: 'blue',
    items: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Terraform', 'Pulumi', 'Argo CD', 'Cloudflare', 'Vercel'],
  },
  {
    heading: 'Security',
    blurb: 'Least privilege, short-lived credentials, and controls tested by attacking our own work.',
    icon: 'shield-check',
    accent: 'emerald',
    items: ['Microsoft Sentinel', 'CrowdStrike', 'Wiz', 'HashiCorp Vault', 'Okta', 'Entra ID', 'Snyk', 'Trivy'],
  },
  {
    heading: 'Observability',
    blurb: 'Alerts tied to user-facing symptoms rather than to every twitch of a CPU graph.',
    icon: 'activity',
    accent: 'orange',
    items: ['OpenTelemetry', 'Datadog', 'Grafana', 'Prometheus', 'Sentry', 'Loki', 'PagerDuty'],
  },
  {
    heading: 'Enterprise systems',
    blurb: 'The systems of record we integrate with most often, API-first wherever one exists.',
    icon: 'enterprise',
    accent: 'indigo',
    items: ['SAP', 'Oracle', 'NetSuite', 'Dynamics 365', 'Salesforce', 'ServiceNow', 'Workday', 'HubSpot'],
  },
  {
    heading: 'Quality engineering',
    blurb: 'Tests, budgets and audits that block a merge rather than produce a report nobody reads.',
    icon: 'check-circle',
    accent: 'cyan',
    items: ['Playwright', 'Vitest', 'pytest', 'axe-core', 'Lighthouse CI', 'k6', 'Chaos testing'],
  },
  {
    heading: 'Design & content',
    blurb: 'Design systems that live in code, and content models that survive a redesign.',
    icon: 'wand',
    accent: 'violet',
    items: ['Figma', 'Design tokens', 'Sanity', 'Contentful', 'Storyblok', 'Payload', 'Storybook'],
  },
];

export const techPrinciples = [
  {
    title: 'We pick boring on purpose',
    body: 'Novel technology carries a maintenance tax your team pays for years. We use the interesting option only where it clearly beats the boring one, and we write down why.',
    icon: 'shield',
  },
  {
    title: 'Portable by default',
    body: 'No proprietary runtime, no framework you cannot leave. Every system is built so another engineering team could take it over from the documentation.',
    icon: 'plug',
  },
  {
    title: 'Evaluation before adoption',
    body: 'A new model or tool enters our stack after it beats the incumbent on a real workload, measured. Announcements are not evidence.',
    icon: 'flask',
  },
  {
    title: 'Instrumented from the first commit',
    body: 'Tracing, metrics and structured logs are part of the initial build. You cannot optimise or debug what you cannot see.',
    icon: 'activity',
  },
];

export const integrations = [
  'SAP', 'Oracle', 'NetSuite', 'Dynamics 365', 'Salesforce', 'ServiceNow', 'Workday', 'HubSpot',
  'Snowflake', 'Databricks', 'Stripe', 'Twilio', 'Slack', 'Microsoft 365', 'Google Workspace', 'Jira',
  'Zendesk', 'Shopify', 'Okta', 'Entra ID', 'AWS', 'Azure', 'Google Cloud', 'Kafka',
];
