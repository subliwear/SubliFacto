/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    baseURL: 'http://localhost:8000', // This represents the base URL for running our frontend project. 
    URL: 'http://localhost:8000/api', // Change only the domain part, keeping "/api" intact
    storageUrl: 'http://localhost:8000' // Change only the laravel primary domain
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.your.domain.com",
      },
      { 
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

module.exports = nextConfig;
