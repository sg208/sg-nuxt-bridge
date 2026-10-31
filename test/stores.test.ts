import { readdirSync } from "node:fs";
import { resolve } from "node:path";
import { beforeEach, describe, expect, it } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { useCounterStore } from "~/stores/counter";
import { useNavigationStore } from "~/stores/navigations";
import en from "../i18n/locales/en.json";

const pagesDir = resolve(process.cwd(), "app/pages");
const pageRoutes = readdirSync(pagesDir).map((file) => {
  const name = file.replace(/\.vue$/, "");
  return name === "index" ? "/" : `/${name}`;
});

describe("counter store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("starts at zero and increments", () => {
    const counter = useCounterStore();
    expect(counter.count).toBe(0);
    counter.increment();
    counter.increment();
    expect(counter.count).toBe(2);
  });
});

describe("navigation store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  const navigation = () => useNavigationStore();
  const allItems = () => [...navigation().header, ...navigation().footer];

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
