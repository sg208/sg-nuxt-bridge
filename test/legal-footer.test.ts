import { describe, expect, it } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import GlobalFooter from "~/components/layouts/GlobalFooter.vue";
import LegalPage from "~/components/LegalPage.vue";

describe("GlobalFooter", () => {
  it("links to the legal pages", async () => {
    const wrapper = await mountSuspended(GlobalFooter);
    const legal = wrapper.get("nav[aria-label='Legal']");
    const hrefs = legal.findAll("a").map((link) => link.attributes("href"));
    expect(hrefs).toEqual(
      expect.arrayContaining(["/accessibility", "/privacy", "/terms"]),
    );
  });

  it("links to the repo with a name that says it opens GitHub", async () => {
    const wrapper = await mountSuspended(GlobalFooter);
    const repo = wrapper.get(
      "a[href='https://github.com/sg208/sg-nuxt-bridge']",
    );
    expect(repo.text()).toContain("Source on GitHub");
    expect(repo.text()).toContain("repository on GitHub");
  });
});

describe("LegalPage", () => {
  it.each(["page_Accessibility", "page_Privacy", "page_Terms"])(
    "renders %s with one h1 and its sections",
    async (page) => {
      const wrapper = await mountSuspended(LegalPage, {
        props: { page, title: "Title" },
      });
      expect(wrapper.findAll("h1")).toHaveLength(1);
      expect(wrapper.findAll("h2").length).toBeGreaterThan(2);
      expect(wrapper.text()).toContain("1 November 2026");
    },
  );

  it("links the terms page to the privacy page", async () => {
    const wrapper = await mountSuspended(LegalPage, {
      props: { page: "page_Terms", title: "Terms" },
    });
    expect(wrapper.find("a[href='/privacy']").exists()).toBe(true);
  });
});
