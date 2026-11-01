import { readdirSync } from "node:fs";
import { resolve } from "node:path";
import { beforeEach, describe, expect, it } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { useNavigationStore } from "~/stores/navigations";
import en from "../i18n/locales/en.json";

const pagesDir = resolve(process.cwd(), "app/pages");
const pageRoutes = readdirSync(pagesDir).map((file) => {
  const name = file.replace(/\.vue$/, "");
  return name === "index" ? "/" : `/${name}`;
});

describe("navigation store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  const navigation = () => useNavigationStore();
  const allItems = () => [
    ...navigation().header,
    ...navigation().footer,
    ...navigation().legal,
  ];

  it("links only to pages that exist", () => {
    for (const item of allItems()) {
      expect(pageRoutes).toContain(item.path);
    }
  });

  it("has an English label for every item", () => {
    for (const item of allItems()) {
      expect(en.navigation).toHaveProperty(item.name);
    }
  });
});
