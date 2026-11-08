import { describe, expect, it } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import IndexPage from "~/pages/index.vue";
import { plans } from "~/data/plans";

const lowestPrice = Math.min(...plans.map((plan) => plan.price));

describe("index page", () => {
  it("quotes the cheapest plan's price, so the copy follows the plans", async () => {
    const wrapper = await mountSuspended(IndexPage);
    expect(wrapper.text()).toContain(`from $${lowestPrice} a month`);
    expect(wrapper.get("#offer-heading").text()).toBe(
      `Plans start at $${lowestPrice} a month.`,
    );
  });

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
