import { withStorybookModuleFederation } from '../webpack/main';
const deps = require("../package.json").dependencies;

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};

const moduleFederationConfig = {
  name: 'components',
  remotes: {
    app1: "app1@http://localhost:3001/remoteEntry.js",
  },
  shared: {
    ...deps,
    react: { singleton: true, eager: true, requiredVersion: deps.react },
    "react-dom": {
      singleton: true,
      eager: true,
      requiredVersion: deps["react-dom"],
    },
    "react-router-dom": {
      singleton: true,
      eager: true,
      requiredVersion: deps["react-router-dom"],
    },
  },
};

export default withStorybookModuleFederation(moduleFederationConfig)(config);
