import { defineStore } from "pinia";

export const useNavigationStore = defineStore("navigation", {
  state: () => {
    return {
      header: [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "Features",
          path: "/features",
        },
        {
          name: "Blog",
          path: "/blog",
        },
        {
          name: "Contact",
          path: "/contact",
        },
      ],
      footer: [
        {
          name: "About",
          path: "/about",
        },
        {
          name: "Features",
          path: "/features",
        },
        {
          name: "Blog",
          path: "/blog",
        },
        {
          name: "Team",
          path: "/team",
        },
        {
          name: "Pricing",
          path: "/pricing",
        },
        {
          name: "Contact",
          path: "/contact",
        },
      ],
      legal: [
        {
          name: "Accessibility",
          path: "/accessibility",
        },
        {
          name: "Privacy",
          path: "/privacy",
        },
        {
          name: "Terms",
          path: "/terms",
        },
      ],
    };
  },
});
