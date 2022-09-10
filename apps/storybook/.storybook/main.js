const { resolve } = require("path")
const { NormalModuleReplacementPlugin } = require("webpack")

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  webpackFinal(config) {
    config.plugins.push(
      new NormalModuleReplacementPlugin(
        /next\/link/,
        resolve(__dirname, "next-link.js")
      )
    )

    return config
  },
  
}
