import { describe, expect, it } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import GlobalNav from "~/components/layouts/GlobalNav.vue";

describe("GlobalNav", () => {
  it("renders a translated link per header item", async () => {
    const wrapper = await mountSuspended(GlobalNav);
    const labels = wrapper.findAll("a").map((link) => link.text());
    expect(labels).toEqual(
      expect.arrayContaining(["Home", "Features", "Blog", "Contact"]),
    );
  });

  it("toggles the mobile menu", async () => {
    const wrapper = await mountSuspended(GlobalNav);
    const toggle = wrapper.get("button[aria-label='Toggle menu']");
    expect(toggle.attributes("aria-expanded")).toBe("false");
    expect(wrapper.get("#global-nav-menu").classes()).toContain("hidden");
    await toggle.trigger("click");
    expect(toggle.attributes("aria-expanded")).toBe("true");
    // A leftover static "hidden" class would win over "flex" and keep the menu closed
    const menuClasses = wrapper.get("#global-nav-menu").classes();
    expect(menuClasses).toContain("flex");
    expect(menuClasses).not.toContain("hidden");
  });
});
