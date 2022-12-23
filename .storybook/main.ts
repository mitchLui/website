module.exports = {
  "stories": [
    { 
      "directory": "../components",
      "titlePrefix": "Components",
      "files": "**/*.stories.tsx"
    },
  ],
  "addons": [
    "storybook-addon-next",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "styles": [
    "../styles/globals.scss",
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}