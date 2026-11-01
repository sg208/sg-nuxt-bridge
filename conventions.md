# conventions.md <!-- enggflo -->

- SCOPE: implicit conventions only. Formatting + lint rules → `eslint.config.mjs` (`@nuxt/eslint`) + Prettier (`pnpm lint`).

## Naming

- Components → PascalCase `.vue` in `app/components/`; site chrome in `app/components/layouts/` as `Global<Name>.vue`.
- Pages → lowercase route name `app/pages/<route>.vue`.
- Stores → `app/stores/<name>.js`, Pinia options API, export `use<Name>Store` (`app/stores/navigations.js:3`).
- Content modules → `app/data/<topic>.js`, named exports.
- i18n keys → `page_<PageName>.*` per page · `navigation.<Name>` for link labels · `a11y.*` for accessible names.
- Tests → `test/<feature>.test.ts`.

## Style

- MUST: UI copy via `$t()` / `t()` keys in `i18n/locales/en.json`; no hardcoded strings in templates (known gaps tracked in `.enggflo/brain.md`).
- MUST: page title via `useHead({ title: computed(() => t(...)) })` (e.g. `app/pages/privacy.vue`).
- MUST: colours via CSS tokens from `app/assets/css/tailwind.css`, never raw hex in components.
- MUST: one root element per page (`pageTransition`, `nuxt.config.ts:9`).
- Script → `<script setup>`, arrow-function handlers prefixed `handle` (`ThemeToggle.vue`, `error.vue:41`).

## Tests

- Components mounted via `mountSuspended` from `@nuxt/test-utils/runtime` (`test/legal-footer.test.ts:2`).

## Git

- Commit subjects → Conventional Commits `type(scope?): subject` (`feat` · `fix` · `docs` · `chore` · `refactor` · `test`; releases `chore(release): vX.Y.Z`).
- Branches → `<type>/<slug>` off `develop`, merged into `develop`; release merges `develop` → `main`.
