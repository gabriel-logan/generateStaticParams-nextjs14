/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix:
    process.env.NEXT_PUBLIC_NODE_ENV === "development"
      ? undefined
      : "/generateStaticParams-nextjs14",
  basePath:
    process.env.NEXT_PUBLIC_NODE_ENV === "development"
      ? undefined
      : "/generateStaticParams-nextjs14",
};

export default nextConfig;

/**
    assetPrefix: "/out",
    basePath: "/out",  USE THIS WHEN BUILDING THE STATIC PAGE and publish it to github pages, the path will start with /out
*/
