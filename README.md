# Portfolio

Personal site of Nicolas Bopp: projects, publications, experience, skills, a contact form,
privacy notice and imprint.

Built with Next.js (App Router) and TypeScript.

## Run locally

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev
```

The site works without any environment variables; only the contact form needs Resend.

## Environment variables

| Name | Purpose |
| --- | --- |
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com/api-keys) |
| `CONTACT_TO` | Inbox that receives contact form messages |
| `CONTACT_FROM` | Sender, on a domain verified in Resend, e.g. `Portfolio <contact@example.com>` |
| `SITE_URL` | Public URL, used for social preview links |

## Content

English is served at clean URLs (`/`, `/imprint`) and German under `/de`. Pages live in
`src/app/[lang]`; [`src/proxy.ts`](src/proxy.ts) maps the English URLs onto them. All copy lives in [`src/content/en.ts`](src/content/en.ts) and
[`src/content/de.ts`](src/content/de.ts): profile, projects, experience, education, skills, privacy
notice and imprint. Facts shared by both languages are in [`src/content/shared.ts`](src/content/shared.ts).

The image shown when the link is shared (LinkedIn, WhatsApp) is generated per language from
[`src/app/[lang]/opengraph-image.tsx`](src/app/%5Blang%5D/opengraph-image.tsx). Technology icons come from
[Simple Icons](https://simpleicons.org).

## Deploy

Import the repository on [Vercel](https://vercel.com/new), add the environment variables above and
deploy. Any host that runs Next.js works.

## Dependency checks

```bash
npx noderegrets . --deep
```
