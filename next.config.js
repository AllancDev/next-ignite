/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,

  images: {
    domains: [
      'files.stripe.com'
    ]
  }
}

module.exports = nextConfig
