/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: "/out",
  basePath: "/out",
};

export default nextConfig;

/**
    assetPrefix: "/out",
    basePath: "/out",  USE THIS WHEN BUILDING THE STATIC PAGE and publish it to github pages
*/
