/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/next.js","next/core-web-vitals"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  overrides: [
    {
      files: ['*.config.js'], // or specifically ['postcss.config.js']
      rules: {
        '@typescript-eslint/no-var-requires': 'off', // If you're using require statements
      },
    },
  ],
};
