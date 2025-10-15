/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@aws-amplify/adapter-nextjs']
  }
}

module.exports = nextConfig