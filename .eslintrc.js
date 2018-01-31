module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './webpack.config.js'
      }
    }
  },
  'extends': ['airbnb'],
  rules: {
    'comma-dangle': ['error', {
      functions: 'ignore'
    }],
    'max-len': ['error', 120, 4],
    'react/no-array-index-key': 'warn',
    'no-underscore-dangle': 'warn',
    'react/forbid-prop-types': 'off',
    'react/prefer-stateless-function': 'off',
    'react/require-default-props': 'warn'
  },
  globals: {
    APP_CONFIG: false,
    google: false,
    navigator: false
  }
};
