# Pre-launch content checklist

The site is built, tested and production-ready. The **engineering** is finished; some of the
**content** is illustrative and must be replaced with verified material before the site goes
public.

Nothing below is a bug. These are the places where realistic placeholder content was written
so the design could be evaluated at full fidelity. Every one is a single typed object in
`src/content/` — no JSX changes needed.

---

## 1. Metrics and statistics — **must be verified**

Every number on the site is currently illustrative. Publishing unverified performance claims
creates real legal and reputational exposure, so treat this as blocking.

| Where | File | What to replace |
| --- | --- | --- |
| Company-wide stats (240+ systems, $4.1M savings, 99.98% uptime, 11 min MTTC) | `src/content/company.ts` → `companyStats` | Verified figures, or delete the band |
| Per-service hero stats and outcome results | `src/content/services/*.ts` → `stats`, `outcomes[].result` | Real measured outcomes |
| Home page failure-mode stats (87%, 11 wks, 0) | `src/app/page.tsx` → `failureModes` | Cite a source or soften to qualitative |
| Hero console figures (94.2%, $0.07, 310 hrs) | `src/components/visuals/HeroConsole.tsx` | Illustrative UI — fine to keep as a mockup, but do not repeat as a claim |
| Industry outcome figures | `src/content/industries.ts` → `work[].result` | Real figures per sector |

**Recommendation:** keep only the numbers you can evidence from a client engagement, and
delete the rest rather than softening them. The site's whole voice is "we publish the
numbers" — unverifiable statistics undercut it more than having fewer would.

---

## 2. Case studies — **anonymised, but the numbers need verifying**

`src/content/caseStudies.ts` contains six engagements described by sector and scale rather
than by client name, with a visible note that names are withheld under confidentiality
agreements. That framing is standard enterprise practice and can stay.

The **narratives and figures are illustrative**. Replace each with a real engagement, or
reduce the set to the ones you can evidence. If a client will go on the record, swap the
sector descriptor for their name and logo.

---

## 3. Testimonials — **need real, attributable quotes**

`src/content/social.ts` → `testimonials`

Quotes are attributed by role and sector (e.g. "Director of Security Operations, national
insurance carrier") rather than to named individuals — deliberately, so no fictitious person
is presented as real. **They are still written, not collected.**

Before launch: obtain real quotes with written permission to publish, even if attribution
stays anonymised.

---

## 4. Founder message — **needs a name**

`src/content/company.ts` → `founderMessage`

Currently signed "The founding team" rather than inventing a person. Replace
`attribution` and `role` with the actual founder, and add a photograph if you want one — the
layout already accommodates it.

---

## 5. Social and contact details

| Item | File | Status |
| --- | --- | --- |
| LinkedIn / X / GitHub / YouTube URLs | `src/content/site.ts` → `site.social` | **Placeholder handles** — confirm or remove |
| Twitter `@cyberxsolutions` in metadata | `src/lib/seo.ts`, `src/app/layout.tsx` | Confirm the handle exists |
| Email `support@cyberxsolutions.us` | `src/content/site.ts` | Confirmed from brief |
| Postal address | `src/content/site.ts` | Confirmed from brief |

Any social link that does not resolve should be deleted from `site.social` — the footer and
`sameAs` schema both read from that object and will adjust automatically.

---

## 6. Certifications and compliance claims

`src/content/social.ts` → `trustMarkers` states "SOC 2 Type II aligned delivery",
"ISO 27001 practices", "HIPAA & GDPR experienced".

These are worded as *practice* claims rather than *certification* claims, which is
defensible if accurate. **If the company holds actual certifications**, say so precisely and
add the certificate numbers. **If it does not**, confirm the current wording is accurate or
remove the markers.

The compliance lists in `src/content/industries.ts` describe frameworks worked within, not
certifications held. Review them for accuracy per sector.

---

## 7. Careers

`src/content/people.ts` → `openRoles`, `benefits`

Six roles with full descriptions, plus a benefits list stating specific commitments (salary
banding, 16 weeks parental leave, 10% research time, four weeks minimum leave). **Confirm
every benefit is real policy** — these are the most quotable lines on the site and candidates
will hold you to them.

Remove roles that are not actually open.

---

## 8. Partner relationships

`src/content/people.ts` → `partnerTypes`

Lists AWS, Azure, Google Cloud, Anthropic, OpenAI, CrowdStrike, Okta and others. The copy
claims "current certifications across all three [clouds]". **Verify before publishing** —
platform vendors do enforce partner-badge usage.

---

## 9. Resource downloads

`src/content/insights.ts` → `resourceItems`

Six frameworks are described (readiness assessment, guardrail specification, payback
calculator, governance starter, performance budget template, migration checklist). They
currently link to related pages rather than to files.

Produce the actual artefacts and update each `href`, or reword the page to describe them as
methodology rather than downloads.

---

## 10. Blog posts

`src/content/insights.ts` → `posts`

Six full articles, credited to "CyberXSolutions Engineering" / "Growth" / "Security" rather
than to individuals. The technical content is sound and reflects genuine practice, but review
for factual accuracy against your own experience, and re-attribute to real authors.

The post dated `2026-06-18` and others carry future-looking dates — adjust to real
publication dates.

---

## 11. Legal documents — **have counsel review**

`src/content/legal.ts` contains a privacy policy, terms of service and cookie policy written
to be readable and substantively complete (GDPR lawful bases, CCPA rights, retention
schedules, transfer mechanisms, Michigan governing law).

**They have not been reviewed by a lawyer.** Have counsel review before launch, and in
particular confirm:

- The processor categories and retention periods match actual practice
- The cookie table matches what the deployed site actually sets (currently it describes an
  analytics cookie that is not yet installed)
- The effective date (currently 1 January 2026)

---

## 12. Analytics

No analytics is installed. The cookie policy describes a consent-gated analytics cookie and
the footer references a cookie preferences control that does not exist yet.

Either install a consent-gated analytics setup and build the preferences control, or remove
the analytics row from the cookie table and the footer reference.

---

## 13. Contact endpoint

Set `CONTACT_WEBHOOK_URL` (see `.env.example`). Until you do, the form returns a clear 503 and
directs visitors to email — it will not silently drop enquiries, but it also will not work.

---

## Verification before you ship

```bash
npm run build
npm start &
QA_BASE_URL=http://localhost:3000 npm run qa:a11y        # expect: zero violations
QA_BASE_URL=http://localhost:3000 npm run qa:responsive  # expect: no overflow
```

Then run Lighthouse against the production deployment and confirm Core Web Vitals on a real
mid-range device, not just a desktop simulation.
