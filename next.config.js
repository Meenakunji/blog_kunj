const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "i.postimg.cc",
      "lh3.googleusercontent.com",
      "demo2.joomshaper.com",
      "s3.ap-south-1.amazonaws.com",
    ],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "s3.ap-south-1.amazonaws.com",
    //   },
    // ],
  },
};

module.exports = nextConfig;
