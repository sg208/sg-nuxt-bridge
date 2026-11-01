# sg-nuxt-bridge

A starter site for Nuxt 4 with landing, blog, pricing, team and legal pages. It began as a Nuxt Bridge template and the name stuck after the move to Nuxt 4.

Live: https://sg-nuxt-bridge.engg.app

## Stack

- Nuxt 4 and Vue 3, built as a static site (`ssr: false`)
- Tailwind CSS 4 through `@tailwindcss/vite`, with design tokens and a light and dark theme
- Pinia for state, VueUse, `@nuxtjs/i18n` for translated strings (English only for now)
- Vitest with `@nuxt/test-utils`
- Demo layouts from Tails by DevDojo, restyled

## Run it locally

You need Node 24 (see `.node-version`) and pnpm.

```bash
pnpm install
pnpm dev        # dev server
pnpm lint       # ESLint and Prettier check
pnpm typecheck  # vue-tsc through nuxi
pnpm test       # Vitest
pnpm build      # static site in .output/public
```

## Deploy

The site runs on a Cloudflare Worker that serves the static files in `.output/public`. The config is in `wrangler.jsonc`.

```bash
pnpm run deploy   # builds, then runs wrangler deploy
```

Wrangler 4 is a dev dependency, so you only need `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` set in your environment. Use `pnpm run deploy`, since a bare `pnpm deploy` is a pnpm built-in command.

A few details for other hosts:

- Unknown paths fall back to the single-page app, and `app/error.vue` shows the not-found page.
- `public/sw.js` removes the service worker left by an old PWA build. Keep it.
- `.github/workflows/main.yml` is an old Bunny.net deploy workflow. It is commented out.

## License

MIT. See [LICENSE](LICENSE).
