import { describe, expect, it } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import IndexPage from "~/pages/index.vue";

describe("index page", () => {
  it("states the real starting price in the hero", async () => {
    const wrapper = await mountSuspended(IndexPage);
    expect(wrapper.text()).toContain("from $5 a month");
    expect(wrapper.text()).not.toContain("15/mo");
  });

  it("renders the features heading from the translations", async () => {
    const wrapper = await mountSuspended(IndexPage);
    expect(wrapper.get("#features-heading").text()).toBe("What you get");
    expect(wrapper.get("#offer-heading").text()).toBe(
      "Plans start at $5 a month.",
    );
  });
});
