import type { Service } from './types';

export const aiAgents: Service = {
  slug: 'ai-agents',
  href: '/ai-agents',
  name: 'AI Agents',
  summary: 'Digital coworkers that read your systems, decide, act through real APIs, and leave an audit trail.',
  icon: 'agent',
  accent: 'violet',
  eyebrow: 'AI Agents',
  h1: 'Digital coworkers that finish the job.',
  lead: 'Not a chatbot bolted onto your helpdesk. Agents that read your systems of record, decide what to do, execute it through real APIs, and leave a record any auditor can follow.',
  heroBadge: 'Every action logged, attributable and reversible',
  visual: 'agents',
  stats: [
    { value: 94, suffix: '%', label: 'Work resolved without a human touch' },
    { value: 71, suffix: '%', label: 'Reduction in cycle time' },
    { value: 312, suffix: '', label: 'Enterprise APIs already integrated' },
    { value: 100, suffix: '%', label: 'Actions written to an audit trail' },
  ],
  problem: {
    title: 'Most "AI agents" are demos with a login screen.',
    body: 'They work beautifully on the happy path and quietly fall apart on the third exception. The failure is never the model. It is everything around the model: no permission boundaries, no evaluation set, no cost ceiling, no way to explain a decision after the fact. So the pilot impresses the board and never gets production authority.',
    costs: [
      'Agents given broad credentials because scoping them was too much work',
      'No regression suite, so every prompt change is a coin flip',
      'Token spend that nobody notices until the invoice arrives',
      'Decisions that cannot be reconstructed six weeks later during an audit',
      'A workflow the team quietly routes around because it cannot be trusted',
    ],
  },
  capabilities: [
    { title: 'Task decomposition', body: 'We break a real job into steps an agent can plan, execute and verify — with explicit success criteria for each one.', icon: 'workflow', accent: 'violet' },
    { title: 'Tool and system integration', body: 'Typed, permissioned interfaces onto your ERP, CRM, ITSM, data warehouse and internal services. Agents call functions, not screens.', icon: 'plug', accent: 'blue' },
    { title: 'Policy and guardrails', body: 'Deny-by-default permissions, spend ceilings, value thresholds and escalation rules enforced in code before any action executes.', icon: 'lock', accent: 'emerald' },
    { title: 'Evaluation harness', body: 'Golden datasets, adversarial cases and regression scoring in CI. A prompt or model change ships only when it beats what is already live.', icon: 'flask', accent: 'cyan' },
    { title: 'Memory architecture', body: 'Working memory, retrieval over your own corpus, and durable state — with an explicit answer for what the agent is allowed to remember.', icon: 'database', accent: 'indigo' },
    { title: 'Human in the loop', body: 'Approval routes for anything above the confidence or value threshold, with the full reasoning trail attached to the request.', icon: 'user-check', accent: 'orange' },
    { title: 'Cost and latency control', body: 'Model routing, caching and step budgets so an agent that thinks too hard about a trivial task gets stopped.', icon: 'gauge', accent: 'pink' },
    { title: 'Observability and audit', body: 'Every step, tool call, token and decision recorded and queryable — the difference between an experiment and a system you can defend.', icon: 'eye', accent: 'blue' },
  ],
  outcomes: [
    { title: 'Service desk resolution', body: 'Agents read the ticket, check entitlement, run the diagnostic, apply the fix and close the loop — escalating only what genuinely needs a person.', result: '68% of tier-one tickets resolved end to end', icon: 'headset', accent: 'blue' },
    { title: 'Invoice and order processing', body: 'Extract, match against purchase orders, resolve pricing exceptions inside tolerance, post the approved batch, and brief the controller.', result: 'Cost per document from $2.40 to $0.07', icon: 'file-text', accent: 'violet' },
    { title: 'Claims triage', body: 'Assemble the file, check policy coverage, flag the indicators that matter, and route to the adjuster with a recommendation and its reasoning.', result: 'First-response time cut from 3 days to 4 hours', icon: 'shield-check', accent: 'emerald' },
    { title: 'Revenue operations hygiene', body: 'Research accounts, deduplicate records, enrich firmographics and keep the CRM honest without a team of contractors doing it by hand.', result: '4.2 hours per rep per week returned to selling', icon: 'trending-up', accent: 'cyan' },
    { title: 'Security alert triage', body: 'Correlate signals, pull host and identity context, dismiss the known-benign, and hand analysts a written case instead of a raw alert.', result: '92% of alert noise cleared before human review', icon: 'radar', accent: 'indigo' },
    { title: 'Procurement intake', body: 'Interpret the request, apply policy, gather approvals, check the preferred-supplier list and raise the requisition in your ERP.', result: 'Requisition cycle from 9 days to 2', icon: 'cart', accent: 'orange' },
  ],
  steps: [
    { label: 'Week 1', title: 'Map the work', icon: 'search', meta: '5 days', body: 'We sit with the people doing the job and record what actually happens — including the exceptions nobody documented. You get a systems map and a measured baseline.' },
    { label: 'Week 2', title: 'Set the boundaries', icon: 'lock', meta: '4 days', body: 'Permissions, spend ceilings, escalation thresholds and the explicit list of things the agent must never do. Signed off before a line of agent code exists.' },
    { label: 'Weeks 3–6', title: 'Build and evaluate', icon: 'code', meta: '3–4 weeks', body: 'Tools, planning loop and policy layer, developed against an evaluation set drawn from your real history. Scored every build, not vibes-checked at the end.' },
    { label: 'Week 7+', title: 'Run it in the light', icon: 'activity', meta: 'Ongoing', body: 'Shadow mode first, then supervised, then autonomous within its boundary. Dashboards, alerts and a runbook your team owns from day one.' },
  ],
  stack: [
    { heading: 'Models', items: ['Claude', 'GPT', 'Gemini', 'Llama', 'Mistral', 'Open-weight, self-hosted'] },
    { heading: 'Orchestration', items: ['LangGraph', 'Temporal', 'Model Context Protocol', 'Custom runtimes', 'Event-driven queues'] },
    { heading: 'Memory & retrieval', items: ['Postgres + pgvector', 'Pinecone', 'Elasticsearch', 'Redis', 'Hybrid search'] },
    { heading: 'Runtime & delivery', items: ['TypeScript', 'Python', 'Kubernetes', 'AWS Bedrock', 'Azure AI Foundry', 'OpenTelemetry'] },
  ],
  pricing: {
    note: 'We price agent work in three stages so you can stop at any point without stranded cost. Roughly 30% of pilots end at stage one with a recommendation not to proceed — that is the system working.',
    tiers: [
      {
        name: 'Proof',
        frame: 'Fixed price · 3–4 weeks',
        body: 'One workflow, measured honestly. You get a working agent in shadow mode, a baseline comparison and a straight answer on whether the economics hold.',
        includes: ['Process mapping and baseline measurement', 'One agent, one workflow, shadow mode', 'Evaluation set built from your history', 'Written go / no-go recommendation'],
      },
      {
        name: 'Build',
        frame: 'Fixed scope · 8–16 weeks',
        body: 'Production deployment with the guardrails, integrations and observability required to give an agent real authority in your business.',
        includes: ['Full tool and system integration', 'Policy, permissions and spend controls', 'CI evaluation and regression suite', 'Dashboards, alerting and runbooks', 'Team training and handover'],
        featured: true,
      },
      {
        name: 'Operate',
        frame: 'Monthly · rolling',
        body: 'We keep it healthy: model updates, evaluation drift, new edge cases and cost tuning. Cancel with 30 days notice, and you keep everything.',
        includes: ['24/7 monitoring and on-call', 'Monthly evaluation and drift review', 'Model and prompt version management', 'Quarterly cost optimisation', 'New workflow additions at agreed rates'],
      },
    ],
  },
  faqs: [
    {
      question: 'How is this different from the AI assistant already built into our software?',
      answer: 'Built-in assistants help a person do a task faster. An agent completes the task. The distinction matters commercially: one improves handle time by 10–20%, the other removes the handle entirely for the 60–90% of cases that follow a known pattern. We often recommend keeping the vendor assistant and adding agents only where the volume justifies it.',
    },
    {
      question: 'What stops an agent from doing something expensive or irreversible?',
      answer: 'Three layers. Permissions are deny-by-default and scoped per tool, so an agent literally cannot call an API it was not granted. Value and confidence thresholds route anything material to a named human approver. And every action runs through a policy check that can block, log or require dual approval. We also build the reverse path — if an action can be taken automatically, it can be undone automatically.',
    },
    {
      question: 'Which model do you use?',
      answer: 'Whichever one wins the evaluation for your workload, and it is usually not the same model for every step. We route cheap classification to small fast models and reserve frontier models for genuine reasoning. Your system is built so that swapping a model is a configuration change, not a rewrite — that is deliberate, because the leaderboard changes every few months.',
    },
    {
      question: 'Can this run entirely inside our infrastructure?',
      answer: 'Yes. We deploy into your cloud account or on-premises, with open-weight models served locally where data residency or regulation requires it. You own the infrastructure, the code and the weights. Expect a performance trade-off on the hardest reasoning steps, and we will quantify it before you decide.',
    },
    {
      question: 'How long before we see a result?',
      answer: 'Shadow mode within four weeks, supervised production between weeks eight and twelve for a typical workflow. We deliberately do not push for autonomy earlier — the shadow period is where you find the exceptions that would otherwise become incidents.',
    },
    {
      question: 'What happens to the people currently doing this work?',
      answer: 'That is your decision and we will not pretend otherwise. In practice most clients redeploy rather than reduce, because the work that remains is the judgement-heavy part that was always being rushed. We will give you honest volumes so you can plan properly rather than discovering the impact after go-live.',
    },
    {
      question: 'How do you handle hallucination?',
      answer: 'By making it structurally difficult to matter. Agents act through typed tools with validated inputs, so an invented value fails schema validation rather than reaching your ERP. Anything factual is retrieved and cited rather than recalled. And the verification step scores output against known-good outcomes before it commits. Residual risk is bounded by the value thresholds, not eliminated by optimism.',
    },
    {
      question: 'Do we get locked into your platform?',
      answer: 'No. We build in your repositories, on your infrastructure, using open standards. There is no CyberXSolutions runtime you have to keep paying for. If you end the relationship, everything keeps running and your team has the documentation to change it.',
    },
  ],
  related: [
    { label: 'AI Automation', href: '/ai-automation', description: 'Deterministic workflows for the work that does not need judgement' },
    { label: 'Enterprise Solutions', href: '/enterprise-solutions', description: 'Rolling agents out across a whole organisation' },
    { label: 'AI Cybersecurity', href: '/ai-cybersecurity', description: 'Autonomous detection and response' },
    { label: 'Our process', href: '/process', description: 'How an engagement actually runs' },
    { label: 'Case studies', href: '/case-studies', description: 'Measured results from production systems' },
    { label: 'Technologies', href: '/technologies', description: 'The stack behind the systems' },
  ],
  seo: {
    title: 'AI Agents for Enterprise Operations | CyberXSolutions',
    description:
      'Production AI agents that resolve tickets, reconcile invoices and close the loop — with scoped permissions, evaluation harnesses and a complete audit trail. 94% straight-through resolution.',
    keywords: ['AI agents', 'agentic AI', 'enterprise AI agents', 'autonomous agents', 'AI agent development', 'multi-agent systems', 'AI workflow automation', 'LLM agents'],
  },
};

export const aiAutomation: Service = {
  slug: 'ai-automation',
  href: '/ai-automation',
  name: 'AI Automation',
  summary: 'Workflows that run end to end without hands — and tell you when they cannot.',
  icon: 'automation',
  accent: 'blue',
  eyebrow: 'AI Automation',
  h1: 'The work runs itself. You keep the control.',
  lead: 'Business processes rebuilt as software: triggered automatically, decided by rules and models together, executed against your real systems, and reconciled at the end so nothing silently goes missing.',
  heroBadge: '99.94% run success rate across managed workflows',
  visual: 'automation',
  stats: [
    { value: 310, suffix: ' hrs', label: 'Returned to the business each week' },
    { value: 99.94, decimals: 2, suffix: '%', label: 'Run success rate' },
    { value: 1.8, decimals: 1, suffix: 's', label: 'Median end-to-end execution' },
    { value: 86, suffix: '%', label: 'Fewer manual handoffs' },
  ],
  problem: {
    title: 'Your process is already automated. In eleven places, badly.',
    body: 'A macro here, an integration platform there, a scheduled script somebody wrote in 2021 and left. Each piece works. The seams do not. When something fails at 2am, nobody can say which step broke or what state the data is in — so the fix is a person doing it by hand, again.',
    costs: [
      'Automations that fail silently and are noticed days later',
      'No single view of whether a process completed',
      'Integration licences priced per task, scaling faster than the value',
      'Business logic trapped in tools your engineers cannot review',
      'Rework because two systems disagree and neither is authoritative',
    ],
  },
  capabilities: [
    { title: 'Process discovery', body: 'We measure what your process actually does — volumes, cycle times, exception rates, rework — before proposing to change any of it.', icon: 'search', accent: 'cyan' },
    { title: 'Document understanding', body: 'Invoices, contracts, claims, forms and email. Extraction with confidence scores, so low-confidence output routes to a human rather than into your ledger.', icon: 'file-text', accent: 'blue' },
    { title: 'Decision engines', body: 'Deterministic rules where the answer is knowable, models where it is a judgement, and a clear boundary between the two.', icon: 'workflow', accent: 'violet' },
    { title: 'System integration', body: 'Native connections to ERP, CRM, ITSM, HRIS and finance platforms — API-first, with resilient handling of the ones that only offer a file drop.', icon: 'plug', accent: 'indigo' },
    { title: 'Exception handling', body: 'Every workflow has a designed path for the case it cannot handle, with context attached, an owner assigned and an SLA that is actually monitored.', icon: 'alert-triangle', accent: 'orange' },
    { title: 'Reconciliation', body: 'End-of-run checks that prove what went in came out. Discrepancies raise themselves rather than waiting for month-end to surface.', icon: 'check-circle', accent: 'emerald' },
    { title: 'Orchestration', body: 'Durable execution with retries, compensation and idempotency, so a failure halfway through does not leave your data in an ambiguous state.', icon: 'refresh', accent: 'pink' },
    { title: 'Operational visibility', body: 'One dashboard showing every run, its state, its cost and its exceptions — readable by an operations manager, not just an engineer.', icon: 'chart-bar', accent: 'blue' },
  ],
  outcomes: [
    { title: 'Accounts payable', body: 'Capture, three-way match, tolerance handling, approval routing and ERP posting, with a clean exception queue for the rest.', result: '94% straight-through, 71% faster close', icon: 'banknote', accent: 'blue' },
    { title: 'Order to cash', body: 'Order validation, credit checks, fulfilment triggers, invoicing and dunning, reconciled daily rather than at month-end.', result: 'Days sales outstanding down 12 days', icon: 'cart', accent: 'violet' },
    { title: 'Employee onboarding', body: 'Accounts, access, hardware, payroll and compliance training provisioned from one approved request, then verified.', result: 'Day-one readiness from 61% to 98%', icon: 'user-check', accent: 'emerald' },
    { title: 'Compliance evidence', body: 'Continuous collection of the artefacts auditors ask for, timestamped and indexed, instead of a quarterly scramble.', result: 'Audit prep from 6 weeks to 4 days', icon: 'shield-check', accent: 'cyan' },
    { title: 'Supply chain exceptions', body: 'Shipment delays, short receipts and price variances detected, classified and actioned against supplier terms automatically.', result: '$1.8M in recovered variance annually', icon: 'truck', accent: 'orange' },
    { title: 'Customer onboarding', body: 'KYC checks, document collection, risk scoring and account setup, with a single status view the customer can see.', result: 'Time to first value cut by 64%', icon: 'users', accent: 'indigo' },
  ],
  steps: [
    { label: 'Phase 1', title: 'Measure the truth', icon: 'gauge', meta: '1–2 weeks', body: 'Volumes, cycle time, error rate, rework and cost per transaction. Most clients discover their process costs more than they thought and fails more often than reported.' },
    { label: 'Phase 2', title: 'Redesign, then automate', icon: 'wand', meta: '1 week', body: 'We do not automate a bad process. Steps that exist only because of an old system constraint get removed before anything is built.' },
    { label: 'Phase 3', title: 'Build and prove', icon: 'code', meta: '4–8 weeks', body: 'Workflow, integrations, exception paths and reconciliation, run in parallel with the manual process until the numbers agree.' },
    { label: 'Phase 4', title: 'Cut over and operate', icon: 'activity', meta: 'Ongoing', body: 'Staged cutover with a rollback path, then continuous monitoring. New exception patterns get folded in rather than accumulating in a queue.' },
  ],
  stack: [
    { heading: 'Orchestration', items: ['Temporal', 'Apache Airflow', 'AWS Step Functions', 'Azure Logic Apps', 'Custom event pipelines'] },
    { heading: 'Document AI', items: ['Azure Document Intelligence', 'AWS Textract', 'Google Document AI', 'Vision-language models', 'Custom extractors'] },
    { heading: 'Enterprise systems', items: ['SAP', 'NetSuite', 'Oracle', 'Dynamics 365', 'Salesforce', 'ServiceNow', 'Workday'] },
    { heading: 'Data & messaging', items: ['Postgres', 'Kafka', 'Snowflake', 'Databricks', 'dbt', 'Redis'] },
  ],
  pricing: {
    note: 'Automation is priced per workflow, not per task. We do not mark up a per-execution licence, because that model punishes you for succeeding.',
    tiers: [
      {
        name: 'Assessment',
        frame: 'Fixed price · 2 weeks',
        body: 'We measure three candidate processes and rank them by return, risk and effort. You get the numbers whether or not you build with us.',
        includes: ['Process mining and time study', 'Cost-per-transaction baseline', 'Ranked automation shortlist', 'Effort and payback estimates'],
      },
      {
        name: 'Workflow build',
        frame: 'Fixed scope · 6–12 weeks',
        body: 'One end-to-end process, production-ready: integrations, exception handling, reconciliation and an operations dashboard.',
        includes: ['Full process redesign and build', 'System integrations included', 'Exception queues with SLAs', 'Operations dashboard and alerting', 'Parallel-run validation'],
        featured: true,
      },
      {
        name: 'Automation programme',
        frame: 'Quarterly · retained',
        body: 'A standing team working through your backlog, typically shipping two to four workflows per quarter with shared infrastructure.',
        includes: ['Dedicated pod of senior engineers', 'Shared orchestration platform', 'Continuous exception reduction', 'Quarterly business review with measured savings'],
      },
    ],
  },
  faqs: [
    {
      question: 'How is this different from RPA?',
      answer: 'Robotic process automation drives the user interface — it clicks buttons a human would click. That works until a vendor moves a field, and it breaks constantly at scale. We integrate at the API and data layer wherever one exists, and use screen-level automation only as a documented last resort for systems that genuinely offer nothing else. The result is dramatically less maintenance.',
    },
    {
      question: 'We already own an automation platform. Can you build on it?',
      answer: 'Often yes, and we will tell you honestly whether it is the right home for the workload. Per-task pricing models get expensive at volume, and business logic locked inside a low-code canvas is hard to review, test and version. Where your platform fits, we use it. Where it does not, we will show you the maths.',
    },
    {
      question: 'What happens when a workflow fails at 3am?',
      answer: 'It retries with backoff, and if it still cannot proceed it stops in a known state rather than half-committed. An alert fires to the on-call route you specify with the run id, the failing step and the current state. The runbook we write tells your team exactly how to resume or roll back. Nothing requires an engineer to reconstruct what happened from logs.',
    },
    {
      question: 'How do you avoid automating a broken process?',
      answer: 'By refusing to. The redesign phase exists specifically to strip out steps that only exist because of a historical system limitation or a control that is no longer needed. Automating waste just produces waste faster and makes it harder to see.',
    },
    {
      question: 'What is a realistic payback period?',
      answer: 'For high-volume back-office processes, typically four to nine months. For lower-volume or highly variable work it can be longer, and sometimes the answer is that it should not be automated at all. The assessment gives you the number before you commit to a build.',
    },
    {
      question: 'Do we need clean data first?',
      answer: 'No — and waiting for clean data is how these programmes die. We design for the data you have, with validation and exception paths that surface quality problems as a by-product. Most clients find automation improves their data quality faster than a data cleanup project would have.',
    },
  ],
  related: [
    { label: 'AI Agents', href: '/ai-agents', description: 'When the work needs judgement rather than rules' },
    { label: 'Enterprise Solutions', href: '/enterprise-solutions', description: 'Scaling automation across the organisation' },
    { label: 'Cloud Engineering', href: '/cloud-engineering', description: 'The platform automation runs on' },
    { label: 'Industries', href: '/industries', description: 'Sector-specific process patterns' },
    { label: 'Case studies', href: '/case-studies', description: 'Measured before and after' },
    { label: 'Process', href: '/process', description: 'How we run an engagement' },
  ],
  seo: {
    title: 'AI Business Process Automation | CyberXSolutions',
    description:
      'End-to-end business automation built like software: durable orchestration, document AI, exception handling and reconciliation. 99.94% run success, 310 hours returned weekly.',
    keywords: ['AI automation', 'business process automation', 'intelligent automation', 'workflow automation', 'hyperautomation', 'document processing automation', 'enterprise automation', 'RPA alternative'],
  },
};

export const aiCybersecurity: Service = {
  slug: 'ai-cybersecurity',
  href: '/ai-cybersecurity',
  name: 'AI Cybersecurity',
  summary: 'Autonomous detection, triage and containment — with a human decision on anything that matters.',
  icon: 'shield-check',
  accent: 'emerald',
  eyebrow: 'AI Cybersecurity',
  h1: 'Contained in minutes. Not discovered in months.',
  lead: 'Security operations that read every signal, dismiss the noise with evidence, and contain real threats before your analysts finish their coffee — without ever taking an irreversible action on its own.',
  heroBadge: 'Mean time to contain: under 3 minutes',
  visual: 'security',
  stats: [
    { value: 92, suffix: '%', label: 'Alert noise cleared before human review' },
    { value: 2.8, decimals: 1, suffix: ' min', label: 'Mean time to contain' },
    { value: 340, suffix: 'M', label: 'Events processed per day' },
    { value: 0, suffix: '', label: 'Autonomous actions without an audit record' },
  ],
  problem: {
    title: 'Your analysts are not short of alerts. They are short of conclusions.',
    body: 'A mid-sized estate generates tens of thousands of alerts a month. Most are benign, and proving that consumes the exact people you hired to catch the ones that are not. So the queue grows, dwell time stretches, and the alert that mattered gets closed at 4pm on a Friday because it looked like the other four hundred.',
    costs: [
      'Analysts spending 70% of their time proving things are fine',
      'Alert fatigue leading to genuine detections being closed unread',
      'Mean time to contain measured in hours or days, not minutes',
      'No consistent evidence trail when the regulator asks',
      'Tooling that detects well and responds not at all',
    ],
  },
  capabilities: [
    { title: 'Signal correlation', body: 'Identity, endpoint, network, cloud and SaaS telemetry joined into one timeline per entity, so a weak signal in four places becomes one strong case.', icon: 'network', accent: 'blue' },
    { title: 'Autonomous triage', body: 'Agents gather the context an analyst would, reach a conclusion, and write the case up — including why they dismissed what they dismissed.', icon: 'radar', accent: 'emerald' },
    { title: 'Behavioural detection', body: 'Baselines per identity and workload, so impossible travel, privilege drift and anomalous egress surface without a signature existing first.', icon: 'activity', accent: 'cyan' },
    { title: 'Graded response', body: 'Reversible containment — session revocation, token invalidation, host isolation — executed automatically. Destructive actions always require a human.', icon: 'lock', accent: 'violet' },
    { title: 'Identity threat detection', body: 'The attack path that actually gets used. Token theft, consent phishing, MFA fatigue and service-principal abuse monitored continuously.', icon: 'fingerprint', accent: 'indigo' },
    { title: 'Cloud posture', body: 'Continuous configuration assessment across AWS, Azure and GCP with drift detection and prioritisation by real exploitability, not CVSS alone.', icon: 'cloud', accent: 'blue' },
    { title: 'Compliance evidence', body: 'SOC 2, ISO 27001, HIPAA and PCI artefacts collected continuously and indexed, so audits stop being a project.', icon: 'file-text', accent: 'orange' },
    { title: 'Adversarial testing', body: 'We attack what we build, including the AI itself — prompt injection, tool abuse and data exfiltration paths through your own agents.', icon: 'alert-triangle', accent: 'pink' },
  ],
  outcomes: [
    { title: 'Phishing response', body: 'Reported message analysed, related deliveries found across every mailbox, malicious links neutralised and sessions revoked for anyone who clicked.', result: 'Full campaign contained in under 4 minutes', icon: 'mail', accent: 'emerald' },
    { title: 'Compromised credentials', body: 'Anomalous authentication correlated with device and geography, sessions killed, tokens revoked and the account routed for verified reset.', result: 'Dwell time from 9 hours to 41 seconds', icon: 'key', accent: 'blue' },
    { title: 'Insider risk', body: 'Unusual access patterns and bulk egress detected against a per-user baseline, with HR and legal escalation paths built into the workflow.', result: '3 material incidents caught pre-exfiltration', icon: 'eye', accent: 'violet' },
    { title: 'Cloud misconfiguration', body: 'Public exposure, over-permissive roles and unencrypted stores found, prioritised by reachability and fixed through pull requests.', result: 'Critical findings down 88% in one quarter', icon: 'cloud', accent: 'cyan' },
    { title: 'Vulnerability triage', body: 'Scanner output correlated with runtime reachability and asset criticality, so your team patches the 4% that can actually be exploited.', result: 'Patch effort reduced 76% at equal risk', icon: 'shield', accent: 'indigo' },
    { title: 'Audit readiness', body: 'Continuous control evidence with gap alerts, replacing the quarterly scramble to reassemble a year of screenshots.', result: 'SOC 2 evidence prep from 6 weeks to 4 days', icon: 'list-checks', accent: 'orange' },
  ],
  steps: [
    { label: 'Stage 1', title: 'Understand the estate', icon: 'search', meta: '2 weeks', body: 'Telemetry inventory, detection coverage assessment against MITRE ATT&CK, and an honest read on where you are blind.' },
    { label: 'Stage 2', title: 'Tune before you automate', icon: 'filter', meta: '2–3 weeks', body: 'Noise reduction first. Automating a queue that is 90% false positive just automates the wrong conclusion faster.' },
    { label: 'Stage 3', title: 'Deploy graded response', icon: 'shield-check', meta: '4–8 weeks', body: 'Autonomous triage, then reversible containment inside an agreed boundary. Destructive actions stay behind human approval permanently.' },
    { label: 'Stage 4', title: 'Operate and adapt', icon: 'refresh', meta: 'Ongoing', body: 'Detection engineering against new techniques, purple-team validation, and quarterly reporting your board can read.' },
  ],
  stack: [
    { heading: 'Detection & response', items: ['Microsoft Sentinel', 'CrowdStrike', 'SentinelOne', 'Splunk', 'Elastic Security', 'Wazuh'] },
    { heading: 'Identity', items: ['Entra ID', 'Okta', 'Ping', 'AWS IAM Identity Center', 'CyberArk', 'HashiCorp Vault'] },
    { heading: 'Cloud security', items: ['AWS Security Hub', 'Azure Defender', 'GCP SCC', 'Wiz', 'Prowler', 'Terraform policy as code'] },
    { heading: 'Frameworks', items: ['MITRE ATT&CK', 'NIST CSF 2.0', 'ISO 27001', 'SOC 2', 'CIS Benchmarks', 'OWASP LLM Top 10'] },
  ],
  pricing: {
    note: 'Security work is priced by estate size and telemetry volume, never by seat. We publish the containment actions we are permitted to take autonomously before you sign anything.',
    tiers: [
      {
        name: 'Assessment',
        frame: 'Fixed price · 2–3 weeks',
        body: 'Detection coverage mapped to ATT&CK, response readiness tested, and a prioritised remediation plan you can execute with or without us.',
        includes: ['Telemetry and coverage audit', 'ATT&CK gap analysis', 'Tabletop response exercise', 'Prioritised remediation roadmap'],
      },
      {
        name: 'Autonomous SOC build',
        frame: 'Fixed scope · 10–16 weeks',
        body: 'Correlation, autonomous triage and graded containment deployed into your existing tooling, tuned against your real alert history.',
        includes: ['Signal correlation across your estate', 'Autonomous triage agents', 'Reversible containment playbooks', 'Analyst console and case management', 'Purple-team validation before go-live'],
        featured: true,
      },
      {
        name: 'Managed detection',
        frame: 'Monthly · 24/7',
        body: 'Our engineers operating your detection and response alongside the automation, with named humans you can call at 3am.',
        includes: ['24/7 monitoring and escalation', 'Continuous detection engineering', 'Monthly threat-hunt cycles', 'Quarterly board-level reporting', 'Incident response retainer included'],
      },
    ],
  },
  faqs: [
    {
      question: 'Will an AI system take down our production environment?',
      answer: 'It cannot. The containment actions available to automation are limited to reversible ones — revoke a session, invalidate a token, isolate a host, disable a key. Anything destructive or service-affecting requires named human approval. That boundary is written into the deployment agreement and enforced in code, not left to configuration.',
    },
    {
      question: 'We already have an EDR and a SIEM. Why add this?',
      answer: 'Because those tools detect well and respond poorly. They produce alerts; they do not produce conclusions. We sit on top of what you own, correlate across it, and do the investigative work your analysts currently do by hand. In most engagements we reduce tool spend rather than add to it, by making the existing licences finally earn their keep.',
    },
    {
      question: 'How do you prevent the AI itself from becoming an attack surface?',
      answer: 'We treat it as one. Agents run with scoped, short-lived credentials. Tool inputs are validated and outputs are constrained. We test against the OWASP LLM Top 10 — prompt injection, tool abuse, excessive agency, data leakage — and we run those tests continuously, not once at launch. Anything our own agents can do, we have already tried to make them do maliciously.',
    },
    {
      question: 'What about false positives causing business disruption?',
      answer: 'Graded response exists for exactly this. High-confidence, low-impact actions execute immediately. Anything with user impact requires a confidence threshold plus a policy match, and the most disruptive actions require a human. We tune against your historical alert data first, so we know the false-positive rate before automation touches production.',
    },
    {
      question: 'Can you work with our existing MSSP?',
      answer: 'Yes, and we frequently do. We handle the automation and detection engineering layer while your MSSP retains monitoring, or we take the whole function. What we will not do is duplicate their work silently — the split of responsibility gets documented before we start.',
    },
    {
      question: 'How quickly can this be deployed?',
      answer: 'Correlation and triage typically reach production in six to ten weeks. Autonomous containment follows once we have several weeks of measured triage accuracy behind it. Anyone offering autonomous response in week two has not tuned it against your data.',
    },
  ],
  related: [
    { label: 'AI Agents', href: '/ai-agents', description: 'The runtime behind autonomous triage' },
    { label: 'Cloud Engineering', href: '/cloud-engineering', description: 'Secure-by-default infrastructure' },
    { label: 'Enterprise Solutions', href: '/enterprise-solutions', description: 'Governance across the organisation' },
    { label: 'Technologies', href: '/technologies', description: 'Tools and frameworks we work in' },
    { label: 'Industries', href: '/industries', description: 'Regulated-sector requirements' },
    { label: 'Why choose us', href: '/why-choose-us', description: 'How we are different' },
  ],
  seo: {
    title: 'AI-Powered Cybersecurity & Autonomous Threat Response | CyberXSolutions',
    description:
      'Autonomous security operations: correlated detection, AI triage that clears 92% of alert noise, and reversible containment in under 3 minutes. Built on your existing SIEM and EDR.',
    keywords: ['AI cybersecurity', 'autonomous security', 'threat detection', 'AI SOC', 'security automation', 'MDR', 'incident response automation', 'identity threat detection'],
  },
};

export const enterpriseSolutions: Service = {
  slug: 'enterprise-solutions',
  href: '/enterprise-solutions',
  name: 'Enterprise Solutions',
  summary: 'AI platforms, governance and change management for organisations rolling this out at scale.',
  icon: 'enterprise',
  accent: 'indigo',
  eyebrow: 'Enterprise Solutions',
  h1: 'From one working pilot to a company that runs on it.',
  lead: 'The hard part was never the first system. It is the platform, the governance, the funding model and the people work that let forty more follow without forty more integrations and forty more arguments.',
  heroBadge: 'Platform, governance and adoption — as one programme',
  visual: 'enterprise',
  stats: [
    { value: 40, suffix: '+', label: 'Workflows on shared platform' },
    { value: 62, suffix: '%', label: 'Lower cost per new use case' },
    { value: 9, suffix: ' weeks', label: 'From idea to production, steady state' },
    { value: 3, suffix: 'x', label: 'Faster internal approval cycles' },
  ],
  problem: {
    title: 'Eleven pilots. Two in production. Nobody can explain why.',
    body: 'Each team solved its own integration, chose its own model, wrote its own prompt library and negotiated its own security review. The work was duplicated, the risk was inconsistent, and the second use case cost as much as the first. That is not an AI problem. It is an operating-model problem.',
    costs: [
      'Every team rebuilding the same integrations and evaluation tooling',
      'Security review as a queue that takes eleven weeks per project',
      'No shared view of what AI is running, where, or at what cost',
      'Model and vendor sprawl with no consistent data handling',
      'Business cases written in isolation and never verified after launch',
    ],
  },
  capabilities: [
    { title: 'AI platform foundation', body: 'Shared gateway, model routing, secret management, evaluation tooling and observability — so the tenth use case costs a fraction of the first.', icon: 'layers', accent: 'indigo' },
    { title: 'Governance that ships', body: 'A risk framework with tiers, pre-approved patterns and a fast lane for low-risk work. Designed to accelerate delivery, not to create a committee.', icon: 'scale', accent: 'blue' },
    { title: 'Integration fabric', body: 'One well-tested set of connectors to your core systems, versioned and owned centrally, instead of nine teams writing nine ERP clients.', icon: 'plug', accent: 'cyan' },
    { title: 'Portfolio management', body: 'A single register of every AI system in the organisation: owner, purpose, data classification, cost and measured benefit.', icon: 'list-checks', accent: 'violet' },
    { title: 'Cost governance', body: 'Per-team budgets, chargeback, model routing policies and anomaly alerts. Finance gets a forecast rather than a surprise.', icon: 'banknote', accent: 'emerald' },
    { title: 'Change and adoption', body: 'Role redesign, training and communications built into delivery — because the systems that fail are rarely the ones that failed technically.', icon: 'users', accent: 'orange' },
    { title: 'Legacy modernisation', body: 'Strangler-pattern migration off systems that cannot participate, sequenced so nothing depends on a big-bang cutover.', icon: 'refresh', accent: 'pink' },
    { title: 'Vendor strategy', body: 'Honest build-versus-buy analysis, contract review and exit planning, including where a platform product beats anything custom.', icon: 'briefcase', accent: 'blue' },
  ],
  outcomes: [
    { title: 'Shared services transformation', body: 'Finance, HR and IT service operations consolidated onto one automation platform with a common exception model.', result: '$4.1M annual run-rate saving', icon: 'building', accent: 'indigo' },
    { title: 'AI centre of excellence', body: 'Standards, reusable components, an internal enablement programme and a review process that clears low-risk work in days.', result: 'Time to production down from 7 months to 9 weeks', icon: 'award', accent: 'blue' },
    { title: 'Regulated AI rollout', body: 'Model risk documentation, bias testing and explainability evidence produced as part of delivery rather than retro-fitted for the regulator.', result: 'First-pass regulatory approval on 6 of 6 systems', icon: 'scale', accent: 'violet' },
    { title: 'Merger integration', body: 'Two operating models reconciled through an automation layer while the underlying system consolidation ran on its own timeline.', result: 'Day-one operational continuity, zero manual bridges', icon: 'handshake', accent: 'emerald' },
    { title: 'Global rollout', body: 'One platform, region-specific data residency, local language handling and country-level policy variation.', result: '14 countries live in 11 months', icon: 'globe', accent: 'cyan' },
    { title: 'Cost recovery programme', body: 'Model routing, caching and workload placement reviewed across the portfolio against measured quality thresholds.', result: 'AI run-cost reduced 47% with no quality loss', icon: 'gauge', accent: 'orange' },
  ],
  steps: [
    { label: 'Stage 1', title: 'Portfolio and readiness', icon: 'search', meta: '3–4 weeks', body: 'What is running, what it costs, what it returns, and where the organisation genuinely is on data, skills and governance.' },
    { label: 'Stage 2', title: 'Platform and guardrails', icon: 'layers', meta: '8–12 weeks', body: 'Shared foundation and a risk framework with a fast lane, proven by putting two real use cases through it.' },
    { label: 'Stage 3', title: 'Scale the pipeline', icon: 'trending-up', meta: 'Quarterly', body: 'A steady cadence of use cases delivered on shared components, with your teams progressively taking the build work.' },
    { label: 'Stage 4', title: 'Hand over the keys', icon: 'handshake', meta: 'Month 9+', body: 'Your platform team runs it. We move to advisory, and the engagement gets smaller on purpose.' },
  ],
  stack: [
    { heading: 'Platform', items: ['Kubernetes', 'Terraform', 'AWS Bedrock', 'Azure AI Foundry', 'Vertex AI', 'LiteLLM gateway'] },
    { heading: 'Governance', items: ['NIST AI RMF', 'ISO 42001', 'EU AI Act readiness', 'Model cards', 'Evaluation registries'] },
    { heading: 'Core systems', items: ['SAP', 'Oracle', 'Workday', 'Salesforce', 'ServiceNow', 'Dynamics 365'] },
    { heading: 'Data', items: ['Snowflake', 'Databricks', 'BigQuery', 'dbt', 'Kafka', 'Unity Catalog'] },
  ],
  pricing: {
    note: 'Enterprise programmes are scoped in stages with a decision point at each boundary. You are never asked to fund a multi-year transformation on the strength of a slide.',
    tiers: [
      {
        name: 'Readiness review',
        frame: 'Fixed price · 4 weeks',
        body: 'An honest assessment of your AI portfolio, platform maturity and governance, with a costed roadmap and a sequencing recommendation.',
        includes: ['Portfolio audit and cost analysis', 'Platform and data readiness assessment', 'Governance gap review', 'Costed 12-month roadmap'],
      },
      {
        name: 'Platform programme',
        frame: 'Staged · 6–12 months',
        body: 'Shared platform, governance framework and the first wave of use cases, delivered alongside your teams rather than around them.',
        includes: ['Shared AI platform build', 'Risk framework with fast-lane approvals', 'Reusable integration fabric', 'First 3–5 production use cases', 'Enablement and capability transfer'],
        featured: true,
      },
      {
        name: 'Embedded partnership',
        frame: 'Annual · retained',
        body: 'A standing senior team inside your organisation, accountable to your delivery targets and reviewed against them quarterly.',
        includes: ['Dedicated multi-disciplinary pod', 'Architecture and governance authority', 'Continuous delivery pipeline', 'Executive and board reporting', 'Priority incident support'],
      },
    ],
  },
  faqs: [
    {
      question: 'We have pilots that never reached production. What actually fixes that?',
      answer: 'In our experience it is rarely the technology. It is that nobody owned the operating change, the security review had no fast lane, and the business case was never re-tested after launch. We address those three specifically: a named business owner per use case, a risk framework with pre-approved patterns for low-risk work, and mandatory benefit verification 90 days post-launch.',
    },
    {
      question: 'Do we need a platform before we do anything useful?',
      answer: 'No, and building one first is a common expensive mistake. Ship one or two real use cases, notice what they had in common, and extract the platform from that. We usually start the platform work in parallel with the second use case, not before the first.',
    },
    {
      question: 'How do you handle EU AI Act and similar regulation?',
      answer: 'We classify each use case against the risk tiers, and for anything above minimal risk we produce the technical documentation, data governance records, human-oversight design and post-market monitoring plan as delivery artefacts. Producing that evidence during the build costs a fraction of reconstructing it afterwards.',
    },
    {
      question: 'Will you work alongside our existing systems integrator?',
      answer: 'Yes. We are usually the AI and automation specialists inside a wider programme. We are explicit about the boundary and we do not compete for scope mid-flight — that arrangement is agreed in writing at the start.',
    },
    {
      question: 'What size of organisation is this for?',
      answer: 'Typically 500 employees and up, or smaller organisations with unusually complex regulatory or operational demands. Below that, a single well-built system usually beats a platform, and we will say so.',
    },
    {
      question: 'How do you measure whether the programme worked?',
      answer: 'Three numbers, agreed before we start: cost per new use case, time from approved idea to production, and verified benefit realised against business case. All three are reported quarterly, including when they are moving in the wrong direction.',
    },
  ],
  related: [
    { label: 'AI Agents', href: '/ai-agents', description: 'The systems the platform carries' },
    { label: 'AI Automation', href: '/ai-automation', description: 'Process automation at scale' },
    { label: 'Cloud Engineering', href: '/cloud-engineering', description: 'The infrastructure underneath' },
    { label: 'Process', href: '/process', description: 'How we run programmes' },
    { label: 'Industries', href: '/industries', description: 'Sector-specific governance needs' },
    { label: 'About us', href: '/about', description: 'Who you would be working with' },
  ],
  seo: {
    title: 'Enterprise AI Platforms, Governance & Scale | CyberXSolutions',
    description:
      'Move from isolated AI pilots to an operating model that scales: shared platform, risk governance with fast-lane approvals, cost control and adoption. 62% lower cost per use case.',
    keywords: ['enterprise AI', 'AI platform', 'AI governance', 'digital transformation', 'AI centre of excellence', 'EU AI Act compliance', 'enterprise automation platform', 'AI operating model'],
  },
};
