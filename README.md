# Portfolio

Personal site of Nicolas Bopp: projects, publications, experience, skills and a contact
form.

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

All copy lives in [`src/content.ts`](src/content.ts): profile, projects, publications,
experience, education and skills. Technology icons come from
[Simple Icons](https://simpleicons.org).

## Deploy

Import the repository on [Vercel](https://vercel.com/new), add the environment variables above and
deploy. Any host that runs Next.js works.

## Dependency checks

```bash
npx noderegrets . --deep
```
