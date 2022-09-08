module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "staticDirs": ['../build'],
  "previewMainTemplate": "./.storybook/previewMainTemplate.ejs",
  "framework": "@storybook/html"
}