// .storybook/next-link.js
const { createElement } = require("react")
const { action } = require("@storybook/addon-actions")

function onClick(event) {
  event.preventDefault()
  action("onClickLink")(event.target.href)
}

module.exports = ({ children, href }) =>
  createElement("a", { ...children.props, href, onClick })