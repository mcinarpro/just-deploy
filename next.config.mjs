/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.worldvectorlogo.com",
        port: "",
        pathname: "/logos/docker.svg",
      },
      {
        protocol: "https",
        hostname: "github.gallerycdn.vsassets.io",
        port: "",
        pathname:
          "/extensions/github/vscode-github-actions/0.27.0/1727202375538/Microsoft.VisualStudio.Services.Icons.Default",
      },
    ],
  },
};

export default nextConfig;
