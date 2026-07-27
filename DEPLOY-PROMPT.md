# Prompt for the Claude Chrome extension

Paste everything below the line into the extension. Have **Hostinger hPanel** and **GitHub**
logged in first — the extension drives your existing browser sessions.

The site is already live at https://sameerhameedbaba-stack.github.io/CyberXSolutions/ — this
prompt is only about moving it onto cyberxsolutions.us.

---

You are finishing a website deployment on Hostinger. The code is written, tested, pushed, and
already live on a temporary URL. Your job is hosting configuration in the browser, and
reporting back accurately.

## What is already true — do not re-verify

**Repository:** `sameerhameedbaba-stack/CyberXSolutions` (capital C, X and S)
**Deploy branch:** `main`
**Domain:** cyberxsolutions.us, Lifetime SSL active on the apex. There is no "Force HTTPS"
toggle on this plan and none is needed — the site ships its own `.htaccess` redirect.
**Plan:** Premium Web Hosting. No Node.js anywhere, and none is required — the site is a
static export.
**Already live at:** https://sameerhameedbaba-stack.github.io/CyberXSolutions/ (GitHub Pages,
serving the identical build). This is a fallback, not the goal.

### The critical fact about this hosting account

The plan carries **ten domains**, and cyberxsolutions.us is not the primary one. In the account
home, `public_html` is a **symlink to `domains/mtechnet.net/public_html`** — a different, live
site. Deploying through it would publish this site at the wrong domain and overwrite that one.

The real document root for this site is:

    /home/u739945294/domains/cyberxsolutions.us/public_html

The shared main FTP account (`u739945294`, and its `u739945294.<domain>` aliases) lands at the
account home where that symlink is. **It must not be used.** That is why a dedicated FTP
account is being created.

### Where we left off

hPanel → cyberxsolutions.us → Files → FTP Accounts → "Create a new FTP account" is open and
filled in:

- Directory prefix (greyed, fixed): `/home/u739945294/domains/cyberxsolutions.us`
- Directory field: `/public_html`
- Username field: `cxsdeploy`
- Password field: empty

**GitHub secrets:** `HOSTINGER_FTP_HOST` and `HOSTINGER_FTP_USER` exist.
`HOSTINGER_FTP_PASSWORD` does not. The last Hostinger deploy failed with
`Error: Input required and not supplied: password`.

## Two things you must never do

1. **Never type, read, or guess a password.** Open the field and hand control to me.
2. **Never delete a file.** Report what you find and let me delete it.

---

## Step 1 — The FTP account

If the create form is still open, confirm the four values above still read as listed. If the
page was reloaded, navigate back to hPanel → cyberxsolutions.us → Files → FTP Accounts →
"Create a new FTP account" and refill exactly those values.

Then stop. I type the password and click **Create**.

Once created, read the FTP Accounts list and report, verbatim:

- the complete FTP username as displayed (Hostinger transforms `cxsdeploy` — report exactly
  what it becomes, character for character)
- the directory shown for that account
- the FTP hostname and port shown for that account

Do not modify or delete the existing `u739945294.cyberxsolutions.us` account.

## Step 2 — The GitHub secrets

Go to
`https://github.com/sameerhameedbaba-stack/CyberXSolutions/settings/secrets/actions`

**2a — update the username.** Find `HOSTINGER_FTP_USER`, click its edit (pencil) icon, replace
the value with the exact username from Step 1, and click **Update secret**.

**2b — add the password.** Click **New repository secret**. Type this into the Name field
exactly, all capitals with underscores:

    HOSTINGER_FTP_PASSWORD

Leave the Secret field to me. I paste the value and click the green **Add secret**.

That green button is what got missed on an earlier attempt — the form looks saved before you
click it. Confirm with me that I clicked it, then reload the secrets list and report how many
repository secrets exist. It must be **three**.

Also open the **Variables** tab and tell me whether `FTP_SERVER_DIR` exists. If it does,
report its value and change nothing — it must be `./`. If it does not exist, that is correct.

## Step 3 — Run the deploy

`https://github.com/sameerhameedbaba-stack/CyberXSolutions/actions` → **Deploy to Hostinger**
in the left sidebar → **Run workflow** → branch `main` → green **Run workflow**.

Report:

- pass or fail for each step: Check the FTP credentials exist, Install dependencies, Typecheck
  and lint, Build static export, Verify the export, Upload to Hostinger
- the exact line reading `Exported N pages, … total` — N should be **40**
- the upload result, or the **full error text** if it fails

Quote errors verbatim. Do not paraphrase, and do not try alternative settings yourself.

## Step 4 — Verify the live site

Only once the workflow is green. Confirm each loads over **https**:

- https://cyberxsolutions.us/
- https://cyberxsolutions.us/ai-agents/
- https://cyberxsolutions.us/contact/
- https://cyberxsolutions.us/blog/what-guardrails-actually-mean/
- https://cyberxsolutions.us/sitemap.xml

Then check:

- **http**://cyberxsolutions.us redirects to https
- www.cyberxsolutions.us redirects to the apex domain
- https://cyberxsolutions.us/nope/ shows the site's own styled 404 page, not a bare Apache error
- the cookie banner appears at the bottom on first load
- https://cyberxsolutions.us/opengraph-image renders **as an image**, not a download

The last two catch a bad upload. If the site loads but looks completely unstyled, or
`opengraph-image` downloads instead of displaying, the `.htaccess` did not transfer — hidden
files were skipped. Tell me; that is a workflow fix, not something to patch in File Manager.

Also open hPanel → File Manager → `domains/cyberxsolutions.us/public_html` and confirm the
files landed there. **Do not open or touch `~/public_html`** — that is mtechnet.net.

Report anything that misbehaves. **Do not edit site files to fix it.**

## If the upload fails on anything TLS or certificate related

Likely, and already planned for: the FTP host is a bare IP address, so its certificate cannot
match a hostname.

**Do not switch the workflow to plain FTP** — that sends the password in clear text.

Give me the exact error and stop. A second workflow, "Deploy to Hostinger (SSH)", is committed
and ready, using rsync over SSH on port 65002 with key authentication and a guard that refuses
to write anywhere except this site's own docroot. Arming it needs a keypair generated outside
the browser, so that is my job.

## Standing rules

- Never type, read or guess a password.
- Never delete a file. Report and wait.
- Never edit site files to fix a problem. Report it; I fix it in the repository.
- If anything on screen contradicts what I have told you, **stop and say so**. That is how the
  mtechnet.net symlink was caught before it overwrote a live website.
