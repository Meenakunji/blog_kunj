const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    domains: [
      "i.postimg.cc",
      "lh3.googleusercontent.com",
      "demo2.joomshaper.com",
      "s3.ap-south-1.amazonaws.com",
      "blog.logrocket.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.ap-south-1.amazonaws.com",
        port: "",
        pathname: "/jupiter-blog-content-images/**",
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        port: "",
        pathname: "/h41XhrFF/**",
      },
      {
        protocol: "https",
        hostname: "blog.logrocket.com",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  pageDataCollectionTimeout: 120000,
};

module.exports = nextConfig;
