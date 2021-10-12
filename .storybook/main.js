const custom = require('../webpack.config.js');

module.exports = {
  stories: ['../src/components/**/*.stories.[tj]s'],
  addons: ['@storybook/addon-actions','@storybook/addon-a11y'],
  webpackFinal: (config) => {
    return { ...config, module: { ...config.module, rules: custom.module.rules } };
  },
}