# design.md <!-- enggflo -->

## Architecture

- SHAPE: Nuxt 4 client-only SPA (`ssr: false`, `nuxt.config.ts:5`), prerendered by `nuxt generate` → `.output/public`. WHY: template site, no server logic.
- HOST: Cloudflare Worker serving static assets — `wrangler.jsonc:5` (`.output/public`) · `wrangler.jsonc:6` SPA not-found fallback · `wrangler.jsonc:8` custom domain `sg-nuxt-bridge.engg.app`. No Worker script; assets only.
- RETIRED HOSTS: Vercel · Netlify · Railway · Cloudflare Pages · engg.me. No config for them remains.
- DEPLOY: manual `pnpm run deploy` (`package.json` `deploy` = `pnpm generate && wrangler deploy`); `wrangler` v4 (devDependency) + env `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`. No CI (`.github/workflows/main.yml` commented out).

## Layers

| layer      | path                                                                | role                                                                                           |
| ---------- | ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| shell      | `app/app.vue:12`                                                    | `titleTemplate` → `<page> · sg-nuxt-bridge`                                                    |
| layout     | `app/layouts/default.vue`                                           | skip link `:4` → `<main id="main">` `:12`; header + footer                                     |
| nav/footer | `app/components/layouts/Global{Nav,Header,Footer}.vue`              | read `useNavigationStore` lists                                                                |
| routes     | `app/pages/*.vue`                                                   | one file per route; title via `useHead`                                                        |
| content    | `app/data/*.js`                                                     | posts · team · plans · features · testimonials · social                                        |
| copy       | `i18n/locales/en.json`                                              | all UI strings; `no_prefix`, English only (`nuxt.config.ts:42-55`)                             |
| state      | `app/stores/navigations.js:3`                                       | `header` · `footer` · `legal` link lists                                                       |
| theme      | `app/assets/css/tailwind.css` · `app/components/ThemeToggle.vue:34` | CSS tokens on `:root`; dark via system or `html.dark`/`html.light` class from VueUse `useDark` |
| errors     | `app/error.vue:30`                                                  | 404 vs generic; `clearError` home `:41`                                                        |

## Data flow

1. Route → page component → reads `app/data/*.js` + `$t()` keys → renders inside default layout.
2. Footer → `navigations.legal` (`GlobalFooter.vue:52`) + GitHub repo link `repoUrl` (`GlobalFooter.vue:77`, https://github.com/sg208/sg-nuxt-bridge).
3. Legal pages (`accessibility` · `privacy` · `terms`) → `LegalPage.vue` with `page="page_<Name>"` → sections from `en.json` (`page_Legal:67` · `page_Accessibility:70` · `page_Privacy:112` · `page_Terms:145`).
4. Theme choice → `useDark` persists to localStorage → class on `<html>` → token overrides.

## Key decisions

- Client-only static build. WHY: no server data; static assets fit a Worker without a script. `nuxt.config.ts:5`
- Components registered with `pathPrefix: false`. WHY: keep `GlobalNav`/`GlobalFooter` names. `nuxt.config.ts:34`
- Legal copy in i18n JSON, one shared `LegalPage` renderer. WHY: pages differ only in content. `app/components/LegalPage.vue`
- Legal copy states hosting/storage facts (Cloudflare host, localStorage theme key, cdn.devdojo.com images). WHY: privacy page must match reality → update `en.json` when hosts or storage change.
- `public/sw.js` self-destroying service worker. WHY: unregister the old PWA build for returning visitors.
- `pageTransition` needs single-root pages. `nuxt.config.ts:9`
