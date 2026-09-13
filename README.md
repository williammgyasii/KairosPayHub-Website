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
| `CLOUDFLARE_API_TOKEN` | API token with **Account → Cloudflare Pages → Edit** (and **Account → Account Settings → Read**) |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare account ID |

Custom domains (`www.kairospayhub.com`, `kairospayhub.com`) are configured in Cloudflare Dashboard → **Workers & Pages** → **kairospayhub-marketing** → **Custom domains**. DNS lives in the main KairosPayHub infra repo (`scripts/setup-marketing-dns.sh`).

## Manual deploy

```bash
npm run build
npx wrangler pages deploy dist --project-name kairospayhub-marketing --branch main
```
