module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
  },
  extends: "eslint:recommended",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],

  rules: {},
};
