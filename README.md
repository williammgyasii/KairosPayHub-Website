# KairosPayHub marketing site

SaaS-style marketing site for **[www.kairospayhub.com](https://www.kairospayhub.com)**.

Stack: Vite + React + Tailwind v4 + React Router.

App: [app.kairospayhub.com](https://app.kairospayhub.com)

## Local

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Landing — hero, features, product tour, roles, FAQ |
| `/pricing` | Early-access pricing |

Product screenshots live in `public/product/` (captured from dev).

## Deploy

Push to **`main`** → GitHub Actions → Cloudflare Pages (`kairospayhub-marketing`).

See repo secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`.
