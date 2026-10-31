import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    // Prettier owns formatting; it writes void elements as `<img />`
    "vue/html-self-closing": "off",
  },
});
