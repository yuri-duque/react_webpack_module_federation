import { StorybookConfig } from '@storybook/react-webpack5';
import module from '../webpack.config.js'

const modules = module(null, { mode: "development" });

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.tsx"],
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
  webpackFinal: async (config, { configType }) => {
    config.plugins?.push(...modules.plugins);

    return config;
  },
};

export default config;
