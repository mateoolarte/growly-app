const securityHeaders = [
  {
    // Allow DNS Prefetch resolution of Links, assets (JS, CSS, etc)
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    // Protect agaings cross-site scripting (XSS) attacks
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    // Avoid to insert the website as a iframe in other websites
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
];

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "growly-strapi-images.s3.us-east-1.amazonaws.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
      },
    ],
  },
  sassOptions: {
    includePaths: ["./app/styles"],
    prependData: `@import "breakpoints.scss";`,
  },
};

export default nextConfig;
