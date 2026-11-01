# SG-NUXT-BRIDGE

## Overview

This started as a working template with Nuxt Bridge. It now runs on Nuxt 4; the repo name is kept for history.

## Stacks inside this template

- Nuxt 4 (Vue 3, JavaScript, `ssr: false` static output)
- Vue 3 (Script Setup + Composition API + Options API)
- Tailwind CSS (v4, via `@tailwindcss/vite`)
- Pinia (Vue store)
- @nuxtjs/i18n (Internationalization)
- VueUse
- Fancy routing transitions
- Layouts
- Demo content from Tails (DevDojo), restyled with design tokens and a light/dark theme
- Vitest + @nuxt/test-utils
- Deploy to Cloudflare Workers (static assets)
- Deploy to Bunny.net (Storage + CDN) with GitHub Actions (CI) **\_ CURRENTLY DISABLED _**

## Getting started

```bash
pnpm install   # Node 24 (.node-version), pnpm (packageManager in package.json)
pnpm dev       # dev server
pnpm build     # static site in .output/public (dist symlinks to it)
pnpm lint      # ESLint + Prettier check
pnpm typecheck  # vue-tsc via nuxi
pnpm test      # Vitest
```

## Deploy to Cloudflare Workers

https://sg-nuxt-bridge.engg.app

The site runs as a Cloudflare Worker serving static assets on the sg208 account. `wrangler.jsonc` serves `.output/public`, which `pnpm generate` produces. `pnpm deploy` builds and runs `wrangler deploy`; it needs `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` in the environment.

## Deploy to Bunny.net (Storage + CDN) with GitHub Actions **\_ CURRENTLY DISABLED _**

https://sg-nuxt-bridge-bunny.engg.me **\_ CURRENTLY DISABLED _**

## Deployment notes

- Node version: `24`
- Rendering: client-side only (`ssr: false`)
- Public folder: `.output/public` (`dist` is a symlink to it)
- Build command: `pnpm build`
- 404 redirect for your hoster: `/404.html`
- Custom error page: `./app/error.vue`

## License

MIT. See [LICENSE](LICENSE).
