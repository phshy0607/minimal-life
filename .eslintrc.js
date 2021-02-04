module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['react'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    Babel: true,
    React: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    settings: {
      'import/extensions': ['.js', '.jsx'],
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': [1],
    // 允许console
    'no-console': [0],
    // 允许匿名函数
    'func-names': [0],
    // 当只有一个export的时候，允许不使用default export
    'import/prefer-default-export': [0],
    // 允许三目表达式和二元条件判断
    'no-unused-expressions': [
      1,
      { allowShortCircuit: true, allowTernary: true },
    ],
    // 不限制是否destruct对象或者array
    'prefer-destructuring': [0],
    // 允许使用_作为命名前缀
    'no-underscore-dangle': [0],

    'react/prop-types': [0, { ignore: ['children'] }],
    'react/jsx-props-no-spreading': [0],
    'react/jsx-filename-extension': [0],
    'jsx-a11y/no-static-element-interactions': [0],
    'jsx-a11y/no-noninteractive-element-interactions': [0],
    'jsx-a11y/click-events-have-key-events': [0],
    'react/no-array-index-key': [1],
    'no-shadow': [1],
    'consistent-return': [1],
    'jsx-a11y/anchor-is-valid': [1],
    'no-param-reassign': [1],
    'jsx-a11y/no-autofocus': [1],
    'no-nested-ternary': [0],
  },
}
