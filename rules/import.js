module.exports = {
  extends: ['plugin:import/recommended', 'plugin:import/typescript'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    'import/order': [
      'error',
      {
        'groups': [
          'builtin',
          'external',
          ['internal', 'parent', 'sibling', 'index', 'object', 'type'],
          'unknown',
        ],
        'pathGroupsExcludedImportTypes': ['builtin'],
        'newlines-between': 'always',
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'import/default': 'off',
    'import/namespace': 'off',
  },
}
