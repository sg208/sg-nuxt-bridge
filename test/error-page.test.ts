import { describe, expect, it } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import ErrorPage from "~/error.vue";
import NotFoundPage from "~/pages/[...slug].vue";

describe("error page", () => {
  it("shows the not-found page with one h1 and a link home", async () => {
    const wrapper = await mountSuspended(ErrorPage, {
      props: { error: { statusCode: 404 } },
    });
    const headings = wrapper.findAll("h1");
    expect(headings).toHaveLength(1);
    expect(headings[0]?.text()).toBe("Page not found");
    const home = wrapper.get("main").findAll("a").at(-1);
    expect(home?.text()).toBe("Home page");
    expect(home?.attributes("href")).toBe("/");
  });

  it("shows a generic heading for other errors", async () => {
    const wrapper = await mountSuspended(ErrorPage, {
      props: { error: { statusCode: 500 } },
    });
    expect(wrapper.get("h1").text()).toBe("An error occurred");
  });
});

describe("catch-all page", () => {
  it("renders the not-found heading and a link home", async () => {
    const wrapper = await mountSuspended(NotFoundPage);
    expect(wrapper.findAll("h1")).toHaveLength(1);
    expect(wrapper.get("h1").text()).toBe("Page not found");
    expect(wrapper.get("a").attributes("href")).toBe("/");
  });
});
