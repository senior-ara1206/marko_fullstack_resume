/** @type {import('next').NextConfig} */
const nextConfig = {
  // Windows can race webpack/static-export file renames (ENOENT on 500.html).
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
};

module.exports = nextConfig;
