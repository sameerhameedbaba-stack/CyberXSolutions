# Prompt for the Claude Chrome extension

Everything below the line is self-contained — paste it into a fresh Chrome extension session
and it will have all the context it needs. Log into **Hostinger hPanel** and **GitHub** in the
same browser first; the extension drives your existing sessions.

Two things the extension will not do, by design, and that you must do yourself:

1. **Type or read the FTP password.** It will open the right form and stop.
2. **Delete files** in `public_html`. It will report what is there and stop.

---

You are helping me finish putting a website live on Hostinger. The code is written, tested and
pushed — nothing about the site itself needs changing. Your job is the hosting and CI
configuration in the browser, and reporting back accurately.

## What is already true

Do not re-verify these unless something contradicts them. They were confirmed in an earlier
session.

**Repository:** `sameerhameedbaba-stack/cyberxsolutions`
**Branch that deploys:** `main` (the workflow triggers on push to `main`, and can be run
manually)
**Domain:** cyberxsolutions.us — provisioned on the plan, Lifetime SSL active for the apex,
expires Never. There is no "Force HTTPS" toggle on this plan and none is enabled; the site
ships its own `.htaccess` redirect, so that is correct — do not go looking for the toggle.

**Hosting plan:** Premium Web Hosting. There is **no Node.js support** anywhere in the panel.
This is expected and already accounted for: the site builds as a static export (plain HTML,
CSS, JS) that needs no Node at runtime. Do not suggest switching plans.

**FTP account** (already exists, do not create another):

| Field | Value |
| --- | --- |
| Host | `185.224.137.200` |
| Username | `u739945294.cyberxsolutions.us` |
| Port | `21` (explicit FTPS via AUTH TLS) |
| Home directory | `public_html` |

**SSH is also active** on this account: same IP, port `65002`, username `u739945294`. That is
the fallback if FTPS fails — details at the end.

**GitHub secrets currently set:** `HOSTINGER_FTP_HOST`, `HOSTINGER_FTP_USER`. That is two.
**`HOSTINGER_FTP_PASSWORD` is missing** — that is the entire reason the last deploy failed.

**Last workflow run:** failed at the Upload step with
`Error: Input required and not supplied: password`. Every step before it passed, and the build
logged `Exported 40 pages, 19M total`. So the pipeline is proven; only the credential is
missing.

## Step 1 — Add the missing secret

Go to
`https://github.com/sameerhameedbaba-stack/cyberxsolutions/settings/secrets/actions`.

I will set the FTP password myself in hPanel → Files → FTP Accounts → "Change FTP password",
then type it into the GitHub form.

Your part: open the "New repository secret" form (button at the top right of the Repository
secrets list), put `HOSTINGER_FTP_PASSWORD` in the Name field exactly as written, and hand
control back to me for the Value field. **Do not type, read, or guess the password.**

After I have entered it, I will click **Add secret** — that is the step that got missed last
time, so confirm with me that I clicked it. Then reload the page and tell me how many
repository secrets are listed. It must be **three**. If it still says two, the form was
abandoned and we go round again.

## Step 2 — Confirm the deploy target is empty

hPanel → Files → File Manager → `public_html`.

Tell me every file and folder in there. Expect a single Hostinger placeholder,
`default.php` (~16 KiB).

**Do not delete anything.** Report the contents and I will delete it. The site pins
`DirectoryIndex index.html index.htm` in its own `.htaccess`, so even if `default.php`
survives, `index.html` wins — but a clean directory is still better.

There is also a `DO_NOT_UPLOAD_HERE` marker one level up, outside `public_html`. That is
Hostinger's own signpost. Leave it alone; nothing deploys to that level.

## Step 3 — Run the deploy

`https://github.com/sameerhameedbaba-stack/cyberxsolutions/actions` → "Deploy to Hostinger" →
**Run workflow** on branch `main`.

Watch it and report:

- pass/fail for each step: Install dependencies, Typecheck and lint, Build static export,
  Verify the export, Upload to Hostinger
- the exact line reading `Exported N pages, … total` — N should be **40**
- the upload result: how many files transferred, or the **full error text** if it fails

Quote errors verbatim. Do not paraphrase them and do not try alternative settings on your own.

## Step 4 — Verify the live site

Only once the workflow is green. Open each of these and confirm it loads over **https**:

- https://cyberxsolutions.us/
- https://cyberxsolutions.us/ai-agents/
- https://cyberxsolutions.us/contact/
- https://cyberxsolutions.us/blog/what-guardrails-actually-mean/
- https://cyberxsolutions.us/sitemap.xml
- https://cyberxsolutions.us/robots.txt

Then check each of these behaviours:

- **http**://cyberxsolutions.us redirects to https
- www.cyberxsolutions.us redirects to the apex domain
- a made-up URL such as https://cyberxsolutions.us/nope/ shows the site's own styled 404 page,
  not an Apache error page
- the cookie banner appears at the bottom on first load
- https://cyberxsolutions.us/opengraph-image renders **as an image**, not a download prompt

The last two are the ones that catch a bad upload. If the site loads but looks completely
unstyled, or if `opengraph-image` downloads instead of displaying, the `.htaccess` did not
transfer — hidden files were skipped. Tell me; that is a workflow fix, not something to
patch in the File Manager.

Report anything that does not behave as described. **Do not edit site files to fix it** — I
fix things in the repository and redeploy.

## If the upload fails on anything TLS or certificate related

Likely, and already planned for: the FTP host is a bare IP address, so its certificate cannot
match the hostname.

**Do not switch the workflow to plain FTP.** That would send the password in clear text.

Tell me the exact error and stop. A second workflow, "Deploy to Hostinger (SSH)", is already
committed and ready — it uses rsync over SSH on port 65002 with key authentication. Arming it
needs an SSH keypair generated outside the browser, so it is my job, not yours.

## After it is live

Two things remain that the deploy cannot do:

1. **The contact form has no handler.** In static mode it needs an external one. Create a free
   Formspree or Web3Forms endpoint, add its URL as a GitHub repository **variable** named
   `CONTACT_ENDPOINT` (Variables tab, same settings page as the secrets), and re-run the
   workflow. Until then the form tells visitors to email support@cyberxsolutions.us, which
   works.
2. **Submit the sitemap.** Google Search Console → add cyberxsolutions.us as a property →
   submit `https://cyberxsolutions.us/sitemap.xml`. Same in Bing Webmaster Tools.

---

## Note on `FTP_SERVER_DIR`

If you ever see a repository variable named `FTP_SERVER_DIR`, its value must be `./` — not
`public_html/`. The FTP account is already rooted at `public_html`, so pointing it at
`public_html/` deploys into `public_html/public_html/`: the workflow goes green and the site
stays dead. The workflow defaults to `./` when the variable is absent, so leaving it unset is
also correct.
