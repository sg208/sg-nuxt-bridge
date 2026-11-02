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

  it("has exactly one GitHub link: a repo icon that opens in a new tab", async () => {
    const wrapper = await mountSuspended(GlobalFooter);
    const github = wrapper
      .findAll("a")
      .filter((link) => link.attributes("href")?.includes("github.com"));
    expect(github).toHaveLength(1);
    const repo = github[0]!;
    expect(repo.attributes("href")).toBe(
      "https://github.com/sg208/sg-nuxt-bridge",
    );
    expect(repo.attributes("aria-label")).toBe(
      "Source code on GitHub (opens in a new tab)",
    );
    expect(repo.attributes("target")).toBe("_blank");
    expect(repo.attributes("rel")).toBe("noopener noreferrer");
    expect(repo.text()).toBe("");
    expect(repo.get("svg").attributes("aria-hidden")).toBe("true");
    expect(repo.get("svg").attributes("focusable")).toBe("false");
  });

  it("does not list GitHub among the social links", async () => {
    const wrapper = await mountSuspended(GlobalFooter);
    const social = wrapper.get("ul[aria-label='Social links']");
    expect(social.text()).not.toContain("GitHub");
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
