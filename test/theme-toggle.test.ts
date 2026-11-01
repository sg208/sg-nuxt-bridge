import { describe, expect, it } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import ThemeToggle from "~/components/ThemeToggle.vue";

describe("ThemeToggle", () => {
  it("has an accessible name and flips the theme class", async () => {
    const wrapper = await mountSuspended(ThemeToggle);
    const button = wrapper.get("button");
    expect(button.text()).toContain("Dark theme");
    const wasDark = button.attributes("aria-pressed") === "true";
    await button.trigger("click");
    expect(button.attributes("aria-pressed")).toBe(String(!wasDark));
    const root = document.documentElement.classList;
    expect(root.contains(wasDark ? "light" : "dark")).toBe(true);
  });
});
