/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // เปิด Strict Mode
  experimental: {
    appDir: true, // ถ้าใช้ Next.js 14+ และโหมด App Router
  },
};

module.exports = nextConfig;