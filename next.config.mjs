import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  async redirects() {
    return [
      {
        source: "/signin",
        destination: "/sign-in",
        permanent: true,
      },
      {
        source: "/signin/:path*",
        destination: "/sign-in/:path*",
        permanent: true,
      },
      {
        source: "/signup",
        destination: "/sign-up",
        permanent: true,
      },
      {
        source: "/signup/:path*",
        destination: "/sign-up/:path*",
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [],
    remarkPlugins: [["remark-gfm", {}]],
  },
});

export default withMDX(nextConfig);
