/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable the Suspense check warning
  experimental: {
    missingSuspenseWithCSRBailout: false
  },
  
  // Rest of your configuration
  ...(process.env.NODE_ENV === "production" 
    ? {
        output: "export",
        assetPrefix: "/ui/",
        basePath: "/ui",
        distDir: "../ui"
      }
    : {
        async rewrites() {
          return [
            {
              source: "/query",
              destination: "http://localhost:8080/query" // Proxy to Backend
            }
          ];
        }
      }
  )
};

export default nextConfig; 