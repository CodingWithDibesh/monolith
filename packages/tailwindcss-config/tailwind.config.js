/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        '../../packages/**/*.{js,ts,jsx,tsx,mdx}',
        '../../apps/frontend/**/*.{js,ts,jsx,tsx,mdx}',

        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
