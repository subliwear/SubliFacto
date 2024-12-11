// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: false,
//   swcMinify: true,
//   env: {
//     // For Local Server
//     URL: 'http://127.0.0.1:8000/api/admin', // Corrected IP address
//     storageUrl: 'http://127.0.0.1:8000' // Removed duplicate port
//     //127.0.0.1
//     //192.168.2.195

//   },
//   async redirects() {
//     return [ 
//       {
//         source: "/",
//         destination: "/dashboard",
//         permanent: true,
//       },
//     ];
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: "http",
//         hostname: "127.0.0.1",
//         port: "8000",
//         //pathname: '/api/admin/**'
//       },
//       {
//         protocol: "http",
//         hostname: "localhost",
//       },
//     ],
//   },
//   devIndicators: {
//     buildActivity: false,
//   },
// };

// module.exports = nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    // For Local Server
    URL: 'http://localhost:8000/api/admin', // Change only the domain part, keeping "/api/admin" intact
    storageURL: 'http://localhost:8000' // change only the laravel primary domain
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "localhost",
        
      },
      { 
        protocol: "http",
        hostname: "localhost",
        
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000", // Port utilisé par votre backend Laravel
        pathname: "/storage/**", // Chemin pour limiter aux fichiers du dossier storage
        
      },
    ],
  },
  devIndicators: {
    buildActivity: false,
  },
};

module.exports = nextConfig;
