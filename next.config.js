/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost', 'api.weather.gov', 'earthquake.usgs.gov'],
  },
}

module.exports = nextConfig
