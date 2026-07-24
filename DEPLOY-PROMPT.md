# Prompt for the Claude Chrome extension

Copy everything between the lines into the extension. Have the Hostinger hPanel and GitHub
open and logged in first — the extension drives your browser, so it uses your existing
sessions and never needs a password typed to it.

---

You are helping me put a website live on Hostinger. The code is already written, tested and
pushed. Your job is only the hosting configuration, in the browser.

**Repository:** `sameerhameedbaba-stack/cyberxsolutions`
**Branch with the site:** `claude/cyberxsolutions-enterprise-site-ozu7he`
**Domain:** cyberxsolutions.us

Work through these in order. Tell me what you find at each step before moving on, and stop
and ask me if anything does not match what is described here.

## Step 1 — Identify the hosting plan

Open Hostinger hPanel → Hosting. Tell me:
- the plan name (Premium / Business / Cloud / VPS)
- whether a "Node.js" section exists under Advanced or Website
- whether Git deployment is available
- which domain the plan is attached to, and whether cyberxsolutions.us already points at it

This decides everything after, so do not skip it.

## Step 2 — Confirm the domain and SSL

In hPanel:
- Check cyberxsolutions.us resolves to this hosting account. If the domain is registered
  elsewhere, note the nameservers Hostinger wants so I can update them.
- Under Security → SSL, issue a free SSL certificate for the domain if one is not active.
  Tell me the status. Do not enable "Force HTTPS" in hPanel — the site ships its own
  `.htaccess` that handles the redirect, and having both can cause a redirect loop.

## Step 3 — Create an FTP account

hPanel → Files → FTP Accounts. Create one (or use the existing one) with its home directory
set to `public_html`. Report back:
- FTP hostname
- FTP username
- the port

Do not paste the password into the chat. You will put it straight into GitHub in the next
step.

## Step 4 — Add the deployment secrets to GitHub

Go to
`https://github.com/sameerhameedbaba-stack/cyberxsolutions/settings/secrets/actions`
and add three repository secrets:

| Name | Value |
| --- | --- |
| `HOSTINGER_FTP_HOST` | the FTP hostname from step 3 |
| `HOSTINGER_FTP_USER` | the FTP username from step 3 |
| `HOSTINGER_FTP_PASSWORD` | that account's password |

Then open the "Variables" tab on the same page and add:

| Name | Value |
| --- | --- |
| `FTP_SERVER_DIR` | `public_html/` |

## Step 5 — Trigger and watch the deploy

`main` already exists and the workflow has already run once — it will have failed at the
final upload step, because the FTP secrets did not exist yet. That is expected.

Go to `https://github.com/sameerhameedbaba-stack/cyberxsolutions/actions`, open
"Deploy to Hostinger", and click **Re-run all jobs**. Now that the secrets are set it should
complete. Report:
- whether each step passes (install, typecheck, lint, build, verify, upload)
- the line that reads "Exported N pages" — N should be 40
- any error output, in full, if it fails

If the FTP step fails, the usual causes are: wrong hostname, the FTP account's home
directory not being `public_html`, or the plan blocking FTPS. Tell me the exact error rather
than trying alternatives.

## Step 6 — Verify the live site

Once the workflow is green, open these and confirm each loads correctly over **https**:

- https://cyberxsolutions.us/
- https://cyberxsolutions.us/ai-agents/
- https://cyberxsolutions.us/contact/
- https://cyberxsolutions.us/blog/what-guardrails-actually-mean/
- https://cyberxsolutions.us/sitemap.xml
- https://cyberxsolutions.us/robots.txt

Then check:
- **http**://cyberxsolutions.us redirects to https
- www.cyberxsolutions.us redirects to the apex domain
- a made-up URL like https://cyberxsolutions.us/nope/ shows the site's own 404 page, not an
  Apache error page
- the cookie banner appears at the bottom on first load
- https://cyberxsolutions.us/opengraph-image loads as an **image**, not a download prompt.
  If it downloads instead of displaying, the `.htaccess` did not upload — hidden files were
  probably skipped. Tell me.

Report anything that does not behave as described. Do not edit any site files to fix it —
tell me instead, and I will fix it in the repository.

---

## If step 1 says VPS

Ignore steps 3, 4 and 6. A VPS runs Node, so the site should use the full build with a
working contact endpoint instead of the static export. Tell me it is a VPS and I will give
you a different set of instructions.

## After it is live

Two things still need doing that the browser cannot:

1. **The contact form is not wired up.** In static mode it needs an external handler. Create
   a free Formspree or Web3Forms endpoint, then add its URL as a GitHub repository variable
   named `CONTACT_ENDPOINT` and re-run the workflow. Until then the form tells visitors to
   email support@cyberxsolutions.us, which still works.

2. **Submit the sitemap.** Google Search Console → add cyberxsolutions.us as a property →
   submit `https://cyberxsolutions.us/sitemap.xml`. Same in Bing Webmaster Tools.
