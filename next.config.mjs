/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/bn",
        permanent: false,
      },
      {
        source: "/store",
        destination: "/bn/store",
        permanent: false,
      },
      {
        source: "/shop",
        destination: "/bn/store",
        permanent: false,
      },
      {
        source: "/soteja",
        destination: "/bn/soteja",
        permanent: false,
      },
      {
        source: "/rosod",
        destination: "/bn/rosod",
        permanent: false,
      },
      {
        source: "/sudha",
        destination: "/bn/sudha",
        permanent: false,
      },
      {
        source: "/cart",
        destination: "/bn/cart",
        permanent: false,
      },
      {
        source: "/checkout",
        destination: "/bn/checkout",
        permanent: false,
      },
      {
        source: "/product/:slug*",
        destination: "/bn/product/:slug*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;