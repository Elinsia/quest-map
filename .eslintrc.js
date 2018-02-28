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
    "jsx-a11y/anchor-is-valid": [ "error", {
            "components": [ "Link" ],
            "specialLink": [ "to" ],
            "aspects": [ "noHref", "invalidHref", "preferButton" ]
          }],
    'comma-dangle': ['error', {
      functions: 'ignore'
    }],
    'max-len': ['error', 120, 4],
    'react/no-array-index-key': 'warn',
    'no-underscore-dangle': ["error", { "allow": ["_id"] }],
    'react/forbid-prop-types': 'off',
    'react/prefer-stateless-function': 'off',
    'react/require-default-props': 'warn',
    'prefer-destructuring': ["error", {"object": false, "array": false}]
  },
  globals: {
    APP_CONFIG: false,
    google: false,
    navigator: false
  }
};
