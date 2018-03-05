module.exports = {
  env: {
    node: true
  },

  parserOptions: {
    sourceType: "script",
    ecmaVersion: 6
  },

  rules: {
    "no-undef": 2,
    "no-unused-vars": 2,
    "no-shadow": 2,
    "no-duplicate-imports": 2,
    "no-redeclare": 2,
  },

  overrides: [
    {
      files: [ 'test.js' ],
      env: {
        mocha: true
      },
      rules: {
      },
      globals: {
        Promise: false
      }
    },
  ]
}