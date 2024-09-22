/** @type {import('next').NextConfig} */
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const nextConfig = {
    trailingSlash: true,
    output: 'export',
    webpack: (config) => {
        config.resolve.alias = {
          ...config.resolve.alias,
          '@repo': path.resolve(__dirname, '../packages'),
        };
        return config;
    }
};

export default nextConfig;
