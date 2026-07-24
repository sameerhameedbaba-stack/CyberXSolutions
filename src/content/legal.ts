import { site, fullAddress } from './site';

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  table?: { columns: string[]; rows: string[][] };
};

export type LegalDoc = {
  slug: string;
  title: string;
  intro: string;
  effective: string;
  sections: LegalSection[];
  seo: { title: string; description: string; keywords: string[] };
};

const EFFECTIVE = 'January 1, 2026';

export const privacyPolicy: LegalDoc = {
  slug: 'privacy-policy',
  title: 'Privacy Policy',
  effective: EFFECTIVE,
  intro:
    'This policy explains what personal information CyberXSolutions Inc collects, why we collect it, how long we keep it, and the rights you have over it. It is written to be read rather than to be defensible, and we have tried to keep the legal formulations to where they are genuinely required.',
  sections: [
    {
      heading: 'Who we are',
      paragraphs: [
        `${site.legalName} ("CyberXSolutions", "we", "us") is the data controller for personal information collected through ${site.domain}. Our registered address is ${fullAddress}.`,
        `For any privacy question, request or complaint, contact us at ${site.email}. We aim to respond within five working days and are required to respond substantively within one month.`,
      ],
    },
    {
      heading: 'Information we collect',
      paragraphs: [
        'We collect the minimum needed to answer your enquiry and to understand whether this website is doing its job. We do not buy personal data from brokers, and we do not enrich the records you give us with third-party datasets.',
      ],
      table: {
        columns: ['Category', 'What it includes', 'Why we collect it'],
        rows: [
          [
            'Enquiry information',
            'Name, work email, company, role, area of interest, budget range and the message you write',
            'To answer your enquiry and route it to the right engineer',
          ],
          [
            'Recruitment information',
            'The contents of an application you send us, including any CV or portfolio',
            'To assess your application and communicate with you about it',
          ],
          [
            'Technical information',
            'IP address, browser and device type, referring page, pages viewed',
            'To keep the site secure and to understand aggregate usage',
          ],
          [
            'Consent records',
            'Your cookie preferences and the date they were set',
            'To honour your choices and to demonstrate that we did',
          ],
        ],
      },
    },
    {
      heading: 'How we use your information',
      list: [
        'To respond to enquiries and provide the services you ask about',
        'To assess job applications and communicate about recruitment',
        'To maintain the security, availability and integrity of our website and systems',
        'To understand aggregate website usage so we can improve the content',
        'To meet legal, accounting and regulatory obligations',
      ],
      paragraphs: [
        'We do not use the information you send us to train machine learning models, and we do not sell, rent or licence personal information to anyone.',
      ],
    },
    {
      heading: 'Our lawful bases',
      paragraphs: [
        'Where the UK GDPR or EU GDPR applies, we rely on the following bases. Where you have consented, you can withdraw that consent at any time without affecting the lawfulness of processing before withdrawal.',
      ],
      list: [
        'Legitimate interests — responding to business enquiries, securing our systems and understanding aggregate site usage, balanced against your rights',
        'Consent — non-essential cookies and analytics, and any marketing communication you specifically opt into',
        'Contract — steps taken at your request before entering into a contract, and performance of a contract once agreed',
        'Legal obligation — retention of records required by tax, employment and corporate law',
      ],
    },
    {
      heading: 'Sharing and processors',
      paragraphs: [
        'We share personal information only with service providers who process it on our behalf under a written data processing agreement, and only to the extent needed to deliver the service. Current categories are set out below; the specific vendors in each category can change, and the current list is available on request.',
      ],
      list: [
        'Cloud hosting and content delivery providers',
        'Website analytics providers, where you have consented',
        'Email delivery and customer relationship management systems',
        'Recruitment and applicant tracking systems',
        'Professional advisers including accountants, auditors and lawyers',
      ],
    },
    {
      heading: 'International transfers',
      paragraphs: [
        'We are based in the United States and some of our service providers process data outside your country of residence. Where we transfer personal information out of the UK or European Economic Area, we rely on the European Commission Standard Contractual Clauses, the UK International Data Transfer Addendum, or an adequacy decision, together with a transfer risk assessment.',
        'For client engagements, we work inside your infrastructure and under your data governance wherever possible, which usually means personal data never leaves the environment you already control.',
      ],
    },
    {
      heading: 'How long we keep it',
      table: {
        columns: ['Category', 'Retention period'],
        rows: [
          ['Enquiries that do not become engagements', '24 months from last contact'],
          ['Client engagement records', 'Duration of the engagement plus 7 years for legal and tax purposes'],
          ['Unsuccessful job applications', '12 months, unless you ask us to keep them longer'],
          ['Website server logs', '90 days'],
          ['Cookie consent records', '12 months'],
        ],
      },
      paragraphs: [
        'At the end of a retention period, information is deleted or irreversibly anonymised. Backups are purged on their own rolling cycle, which may extend actual deletion by up to 35 days.',
      ],
    },
    {
      heading: 'Your rights',
      paragraphs: [
        'Depending on where you live, you may have some or all of the following rights. We will not charge you for exercising them and we will not treat you differently for doing so.',
      ],
      list: [
        'Access — a copy of the personal information we hold about you',
        'Rectification — correction of information that is inaccurate or incomplete',
        'Erasure — deletion of information where we no longer have grounds to keep it',
        'Restriction — limiting how we use your information while a concern is resolved',
        'Portability — a machine-readable copy of information you provided to us',
        'Objection — objecting to processing based on our legitimate interests',
        'Withdrawal of consent — at any time, for anything we do on the basis of consent',
        'Complaint — to your supervisory authority, though we would appreciate the chance to resolve it first',
      ],
    },
    {
      heading: 'California residents',
      paragraphs: [
        'If you are a California resident, the CCPA as amended by the CPRA gives you the right to know what personal information we collect, to request deletion or correction, to opt out of any sale or sharing of personal information, and to limit the use of sensitive personal information.',
        'We do not sell or share personal information as those terms are defined by the CCPA, and we do not collect sensitive personal information through this website. You may exercise your rights by emailing us; we will verify your identity by confirming details you have previously given us rather than asking for additional documents.',
      ],
    },
    {
      heading: 'Security',
      list: [
        'Encryption in transit using TLS 1.2 or above, and encryption at rest for stored data',
        'Least-privilege access with multi-factor authentication required for all staff',
        'Access reviewed quarterly and revoked immediately on role change or departure',
        'Logging and monitoring of access to systems holding personal information',
        'A documented incident response plan, tested at least annually',
        'Supplier due diligence before any processor is engaged',
      ],
      paragraphs: [
        'No system is perfectly secure. If a breach occurs that is likely to result in a risk to your rights, we will notify the relevant supervisory authority within 72 hours and notify you without undue delay where the risk is high.',
      ],
    },
    {
      heading: 'Children',
      paragraphs: [
        'Our website and services are intended for business use and are not directed at children under 16. We do not knowingly collect personal information from children. If you believe a child has provided us with information, contact us and we will delete it.',
      ],
    },
    {
      heading: 'Changes to this policy',
      paragraphs: [
        'We update this policy when our practices change. The effective date at the top of the page always reflects the current version. Where a change materially affects your rights, we will make that clear on this page rather than relying on you to notice.',
      ],
    },
  ],
  seo: {
    title: 'Privacy Policy',
    description:
      'How CyberXSolutions Inc collects, uses, shares and retains personal information, and the rights you have over it. Written to be read.',
    keywords: ['privacy policy', 'data protection', 'GDPR', 'CCPA', 'personal information'],
  },
};

export const termsOfService: LegalDoc = {
  slug: 'terms',
  title: 'Terms of Service',
  effective: EFFECTIVE,
  intro:
    'These terms govern your use of this website. They do not govern client engagements — those are covered by a separate master services agreement and statement of work signed by both parties, which takes precedence over anything on this page.',
  sections: [
    {
      heading: 'Agreement to these terms',
      paragraphs: [
        `By accessing ${site.domain} you agree to these terms. If you do not agree, please do not use the site.`,
        `These terms are between you and ${site.legalName}, a corporation registered in the State of Michigan, United States, with its registered address at ${fullAddress}.`,
      ],
    },
    {
      heading: 'What this website is',
      paragraphs: [
        'This website describes our services and publishes our writing and frameworks. It is informational. Nothing on it constitutes an offer capable of acceptance, a professional recommendation for your specific circumstances, or advice you should act on without talking to us or to your own advisers.',
        'Case studies, statistics and outcomes describe past engagements. Results depend on factors specific to each organisation and are not a prediction or guarantee of what you would achieve.',
      ],
    },
    {
      heading: 'Acceptable use',
      paragraphs: ['You agree not to:'],
      list: [
        'Use the site in any way that breaches applicable law or regulation',
        'Attempt to gain unauthorised access to any part of the site, its servers or connected systems',
        'Probe, scan or test the vulnerability of the site without our prior written permission',
        'Introduce malware, or any other material that is malicious or technologically harmful',
        'Conduct automated scraping or bulk extraction that places unreasonable load on our infrastructure',
        'Reproduce, redistribute or resell substantial portions of the content commercially without permission',
      ],
    },
    {
      heading: 'Responsible security research',
      paragraphs: [
        `We welcome good-faith security research. If you believe you have found a vulnerability, email ${site.email} with the details before disclosing publicly, and give us reasonable time to remediate.`,
        'We will not pursue legal action against researchers who act in good faith, avoid privacy violations and service disruption, and do not access or modify data beyond what is needed to demonstrate the issue.',
      ],
    },
    {
      heading: 'Intellectual property',
      paragraphs: [
        'The content, design, code, illustrations and brand assets on this site are owned by CyberXSolutions Inc or licensed to us, and are protected by intellectual property law.',
        'You may read, download and print pages for your own internal business use, and you may quote or reference our published frameworks and articles with attribution and a link. You may not present our material as your own or resell it as part of a commercial methodology without our written permission.',
        'Third-party names, logos and trademarks referenced on this site belong to their respective owners and are used for identification only.',
      ],
    },
    {
      heading: 'Client engagements',
      paragraphs: [
        'Engagements are governed by a signed master services agreement and statement of work. Those documents cover intellectual property ownership, confidentiality, data processing, warranties, liability, insurance and termination, and they take precedence over these website terms in every respect.',
        'As a matter of standing policy: clients own the code we write for them from the first commit, in their repositories, under their licence. We do not assert shared intellectual property rights over engagement deliverables and we do not require an ongoing licence from us for anything we build.',
      ],
    },
    {
      heading: 'Third-party links',
      paragraphs: [
        'This site links to third-party websites and resources. We do not control them, we are not responsible for their content or practices, and a link is not an endorsement. Review their terms and privacy policies before relying on them.',
      ],
    },
    {
      heading: 'Disclaimers',
      paragraphs: [
        'This website is provided on an "as is" and "as available" basis. To the fullest extent permitted by law, we exclude all warranties, express or implied, including implied warranties of merchantability, fitness for a particular purpose and non-infringement.',
        'We do not warrant that the site will be uninterrupted or error-free, that defects will be corrected, or that the site is free of harmful components. We take reasonable steps on all three.',
      ],
    },
    {
      heading: 'Limitation of liability',
      paragraphs: [
        'To the fullest extent permitted by law, CyberXSolutions Inc will not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits, revenue, data or goodwill, arising out of your use of this website.',
        'Nothing in these terms excludes or limits liability for death or personal injury caused by negligence, for fraud or fraudulent misrepresentation, or for any other liability that cannot lawfully be excluded.',
        'Liability arising from a client engagement is governed by the limitations set out in the applicable master services agreement, not by this page.',
      ],
    },
    {
      heading: 'Indemnity',
      paragraphs: [
        'You agree to indemnify CyberXSolutions Inc against any claim, loss or expense arising from your breach of these terms or your unlawful use of the site.',
      ],
    },
    {
      heading: 'Governing law',
      paragraphs: [
        'These terms are governed by the laws of the State of Michigan, United States, without regard to conflict of law principles. The state and federal courts located in Michigan have exclusive jurisdiction, except that we may seek injunctive relief in any competent jurisdiction to protect our intellectual property.',
        'If you are a consumer resident in the European Economic Area or United Kingdom, you retain the benefit of any mandatory consumer protections of your country of residence.',
      ],
    },
    {
      heading: 'Changes and severability',
      paragraphs: [
        'We may update these terms. The effective date at the top of this page reflects the current version, and continued use of the site after a change constitutes acceptance.',
        'If any provision is found unenforceable, it will be modified to the minimum extent necessary and the remaining provisions will stay in full force.',
      ],
    },
    {
      heading: 'Contact',
      paragraphs: [`Questions about these terms: ${site.email}, or write to us at ${fullAddress}.`],
    },
  ],
  seo: {
    title: 'Terms of Service',
    description:
      'The terms governing use of the CyberXSolutions website, including acceptable use, intellectual property, disclaimers and governing law.',
    keywords: ['terms of service', 'terms and conditions', 'website terms', 'legal'],
  },
};

export const cookiePolicy: LegalDoc = {
  slug: 'cookie-policy',
  title: 'Cookie Policy',
  effective: EFFECTIVE,
  intro:
    'This policy explains the cookies and similar technologies this website uses, what each one does, and how to control them. We use very few, and none of them exist to follow you around the internet.',
  sections: [
    {
      heading: 'What cookies are',
      paragraphs: [
        'Cookies are small text files a website stores on your device. They let a site remember things between page loads — your preferences, whether you are signed in, or that you already dismissed a banner.',
        'We also use similar technologies including local storage and, where you have consented, analytics tags. Everything in this policy applies to those equally.',
      ],
    },
    {
      heading: 'Our approach',
      paragraphs: [
        'Strictly necessary cookies are set because the site cannot function without them. Everything else is off until you choose otherwise. We do not set advertising or cross-site tracking cookies on this website, and we do not share cookie data with advertising networks.',
      ],
    },
    {
      heading: 'Cookies we use',
      paragraphs: [
        'This is the complete list. If it looks short, that is because it is — this site sets one cookie of its own and nothing else runs unless you switch it on.',
      ],
      table: {
        columns: ['Name', 'Type', 'Purpose', 'Duration'],
        rows: [
          [
            'cx_consent',
            'Strictly necessary',
            'Records your cookie choice so we can honour it and evidence that we did. Mirrored in local storage.',
            '12 months',
          ],
        ],
      },
    },
    {
      heading: 'Analytics',
      paragraphs: [
        'No analytics is currently running on this site. The preferences control includes an analytics toggle so that, if we do introduce aggregate measurement, it will only ever run for visitors who have switched it on — never by default and never retroactively.',
        'If that changes, this policy is updated with the specific cookies involved before the change goes live, and anyone who previously declined stays declined.',
      ],
    },
    {
      heading: 'Consent and the law',
      paragraphs: [
        'Strictly necessary cookies do not require consent under the ePrivacy Directive, because the service you asked for cannot be provided without them. Everything else requires your opt-in, and we treat a Global Privacy Control or Do Not Track signal as a standing opt-out — if your browser sends one, non-essential storage is disabled without you having to interact with anything.',
      ],
    },
    {
      heading: 'Managing your preferences',
      list: [
        'Use the "Cookie preferences" control in the site footer to change your choice at any time',
        'Configure your browser to block or delete cookies — every major browser supports this in its privacy settings',
        'Enable Global Privacy Control or Do Not Track; we honour both as a standing opt-out',
        'Use browser extensions that block tracking technologies',
      ],
      paragraphs: [
        'Blocking the consent cookie means we cannot remember your choice, so you will be asked again on your next visit. Nothing else about the site changes — no feature depends on cookies.',
      ],
    },
    {
      heading: 'Third-party cookies',
      paragraphs: [
        'We keep third-party technologies to a minimum. Where our analytics provider sets cookies, it does so under a data processing agreement that prohibits using the data for its own purposes.',
        'Embedded content from other sites, if we ever include any, may set its own cookies. Where that happens we will list it in the table above and gate it behind consent.',
      ],
    },
    {
      heading: 'Changes',
      paragraphs: [
        'If we add or remove a cookie, this policy is updated and the effective date changes. Material changes to non-essential cookies will re-prompt you for consent rather than being applied silently.',
      ],
    },
    {
      heading: 'Contact',
      paragraphs: [`Questions about cookies or your preferences: ${site.email}.`],
    },
  ],
  seo: {
    title: 'Cookie Policy',
    description:
      'The cookies and similar technologies used on the CyberXSolutions website, what each one does, and how to control them.',
    keywords: ['cookie policy', 'cookies', 'tracking technologies', 'consent', 'ePrivacy'],
  },
};

export const legalDocs = [privacyPolicy, termsOfService, cookiePolicy];
