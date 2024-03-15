const stylistic = require('@stylistic/eslint-plugin')

const customized = stylistic.configs.customize({})

module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@stylistic',
  ],
  rules: {
    ...customized.rules,
  },
  extends: require.resolve('./rules/javascript'),
  overrides: [
    {
      files: ['*.ts', '*.vue'],
      extends: [require.resolve('./rules/typescript'), require.resolve('./rules/import')],
    },
    {
      files: ['*.vue'],
      extends: require.resolve('./rules/vue'),
    },
  ],
}
