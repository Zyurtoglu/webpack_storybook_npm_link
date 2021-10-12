const custom = require('../webpack.config.js');

module.exports = {
  stories: ['../src/components/**/*.stories.[tj]s'],
  addons: [
      '@storybook/addon-actions',
      '@storybook/addon-a11y',
      '@storybook/addon-essentials',
      "@storybook/preset-create-react-app"
    ],
  webpackFinal: (config) => {
    return { ...config, module: { ...config.module, rules: custom.module.rules } };
  },
}