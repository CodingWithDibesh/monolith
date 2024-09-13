/** @type {import('tailwindcss').Config} */
const { tailwindConfig } = require("tailwindcss-config");

module.exports = {
    ...tailwindConfig,
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', ...tailwindConfig.content],
};
