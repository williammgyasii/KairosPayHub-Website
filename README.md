# KairosPayHub marketing site

Vite + React SPA for **[www.kairospayhub.com](https://www.kairospayhub.com)**.

Product app: [app.kairospayhub.com](https://app.kairospayhub.com)

## Local

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Deploy

Push to **`main`** → GitHub Actions builds and deploys to Cloudflare Pages project **`kairospayhub-marketing`**.

Preview URL: [kairospayhub-marketing.pages.dev](https://kairospayhub-marketing.pages.dev)

### GitHub secrets (repo settings)

| Secret | Value |
|--------|--------|
| `CLOUDFLARE_WRANGLER_REFRESH_TOKEN` | Same as KairosPayHub — from `~/Library/Preferences/.wrangler/config/default.toml` after `wrangler login` |
| `CLOUDFLARE_ACCOUNT_ID` | `e23518956f08ff35812d9ab001a39880` |
| `CLOUDFLARE_API_TOKEN` | Optional — only if it includes **Cloudflare Pages → Edit** (zone DNS token alone is not enough) |

Custom domains (`www.kairospayhub.com`, `kairospayhub.com`) are configured in Cloudflare Dashboard → **Workers & Pages** → **kairospayhub-marketing** → **Custom domains**. DNS lives in the main KairosPayHub infra repo (`scripts/setup-marketing-dns.sh`).

## Manual deploy

```bash
npm run build
npx wrangler pages deploy dist --project-name kairospayhub-marketing --branch main
```
