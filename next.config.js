const path = require('path')
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.resolve.alias['react'] = path.resolve(__dirname, '.', 'node_modules', 'react')
    return config
  },
}

module.exports = nextConfig
