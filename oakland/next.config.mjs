/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export: `npm run build` writes a deployable site to /out.
  output: "export",
  // Images are served as-is (no Next image server in a static export).
  // Responsive sizes are handled by <Photo /> — see src/components/Photo.tsx.
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
