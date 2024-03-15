module.exports = {
  rules: {
    // eslint-recommended"
    'constructor-super': 'off',
    'getter-return': 'off',
    'no-const-assign': 'off',
    'no-dupe-args': 'off',
    'no-dupe-class-members': 'off',
    'no-dupe-keys': 'off',
    'no-func-assign': 'off',
    'no-import-assign': 'off',
    'no-new-symbol': 'off',
    'no-obj-calls': 'off',
    'no-redeclare': 'off',
    'no-setter-return': 'off',
    'no-this-before-super': 'off',
    'no-undef': 'off',
    'no-unreachable': 'off',
    'no-unsafe-negation': 'off',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'valid-typeof': 'off', // ts(2367)

    // 禁止使用undefined初始化值
    'no-undef-init': 'error',

    // 未使用的变量
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

    // 换行
    '@stylistic/linebreak-style': ['error', 'unix'],

    // 使用单引号
    '@stylistic/quotes': ['error', 'single'],

    // 属性引号在需求的情况下才会出现
    '@stylistic/quote-props': ['error', 'as-needed'],

    // jsx使用单引号
    '@stylistic/jsx-quotes': ['error', 'prefer-single'],

    // 不使用分号
    '@stylistic/semi': ['error', 'never'],

    // 数组括号一致性
    '@stylistic/array-bracket-newline': ['error', 'consistent'],

    // 数组元素一致性
    '@stylistic/array-element-newline': ['error', 'consistent'],

    // 类成员间距
    '@stylistic/lines-between-class-members': ['error', 'always'],

    // 注释规范
    '@stylistic/lines-around-comment': ['error', { beforeBlockComment: true }],

    // 允许最大的空行
    '@stylistic/no-multiple-empty-lines': ['error', { max: 1 }],

    // 不允许多个空格
    '@stylistic/no-multi-spaces': 'error',

    // 缩进
    '@stylistic/indent': ['error', 2, { SwitchCase: 1 }],

    // 块内部间距
    '@stylistic/block-spacing': ['error', 'always'],

    // 块前间距
    '@stylistic/space-before-blocks': 'error',

    // 箭头函数间隔
    '@stylistic/arrow-spacing': 'error',

    // 逗号间隔
    '@stylistic/comma-spacing': ['error', { before: false, after: true }],

    // 对象key间隔
    '@stylistic/key-spacing': ['error', { afterColon: true }],

    // 对象括号间隔
    'object-curly-spacing': ['error', 'always'],

    // 关键字间隔
    '@stylistic/keyword-spacing': ['error', { after: true }],

    // 中缀操作符的间距
    '@stylistic/space-infix-ops': 'error',

    // 函数参数间距
    '@stylistic/space-in-parens': ['error', 'never'],
  },
}
