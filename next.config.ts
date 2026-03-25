/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname, // absolute path fix
  },
};

export default nextConfig;