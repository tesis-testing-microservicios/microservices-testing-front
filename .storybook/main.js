const custom = require('../config/webpack.config.js');
const path = require('path');

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-styling',
  ],
  features: {
    emotionAlias: false,
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
  webpackFinal: async config => {
    config.resolve.fallback = {
      timers: false, // or require.resolve("tty-browserify")
      os: false, // or require.resolve("os-browserify/browser")
      tty: false, // or require.resolve("timers-browserify")
      http: false, // or require.resolve("stream-http")
      https: false, // or require.resolve("https-browserify")
      zlib: false, // or require.resolve("browserify-zlib")
    };

    config.resolve.modules = [
      path.resolve(__dirname, '..', 'src'),
      path.resolve(__dirname, '..', 'node_modules'),
    ];

    config.resolve.alias = {
      '.storybook': path.resolve(__dirname),
    };

    return config;
  },
};
export default config;
