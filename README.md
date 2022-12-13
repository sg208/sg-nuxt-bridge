# SG-NUXT-BRIDGE

## Overview

This is a working template with Nuxt Bridge. The stacks are below and this is still working in progress so I will keep adding as I see fit :)

## Stacks inside this template

- Nuxt Bridge (Nuxt 2 > 3 with Javascript)
- Vue 2 (Script Setup + Composition API + Options API)
- Tailwind CSS (v3)
- Pinia (Vue store)
- nuxt/i18n (Internationalization)
- vueUse
- Axios
- Fancy routing transitions
- Layouts
- UI by Tails (DevDojo)
- Deploy to Cloudflare Pages
- Deploy to Bunny.net (Storage + CDN) with GitHub Actions (CI) **_ CURRENTLY DISABLED _**

## Deploy to Cloudflare Pages

https://sg-nuxt-bridge.engg.me

## Deploy to Bunny.net (Storage + CDN) with GitHub Actions **_ CURRENTLY DISABLED _**

https://sg-nuxt-bridge-bunny.engg.me **_ CURRENTLY DISABLED _**

## Deployment notes

- Node version: `16.15.0`
- Target: `static`
- Public folder: `dist`
- Build command: `npm run build`
- 404 redirect for your hoster: `/404.html`
- Custom 404 error page: `./layouts/error.vue`
