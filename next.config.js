/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['@aws-amplify/adapter-nextjs'],
  outputFileTracingRoot: __dirname
}

module.exports = nextConfig