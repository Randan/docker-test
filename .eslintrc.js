module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 12
  },
  'rules': {
    'indent': ['error', 2],
    'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
    'semi': 'error',
    'object-curly-spacing': ['error', 'always']
  },
};
