/** @type {import('tailwindcss').Config} */
import { tailwindConfig } from "tailwindcss-config";

export default {
    ...tailwindConfig,
    content: ['./**/*.{js,ts,jsx,tsx,mdx}', ...tailwindConfig.content],
};
