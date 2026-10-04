/** @type {import('next').NextConfig} */
const nextConfig = {
  // Statický export do složky out/ — nahrává se na jakýkoli běžný hosting, bez Node serveru.
  output: "export",
  images: {
    unoptimized: true,
  },
}

export default nextConfig
