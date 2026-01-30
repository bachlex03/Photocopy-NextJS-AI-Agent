/** @type {import('next').NextConfig} */
const nextConfig = {
	// Enable React Strict Mode for better debugging
	reactStrictMode: true,

	// Disable "X-Powered-By" header for security
	poweredByHeader: false,

	// Since you use Biome, we skip standard ESLint to speed up builds
	eslint: {
		ignoreDuringBuilds: true,
	},

	// Ensures type safety on build
	typescript: {
		ignoreBuildErrors: false,
	},

	// Advanced Image Optimization
	images: {
		formats: ["image/avif", "image/webp"],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		// Minimum cache TTL for optimized images (1 month)
		minimumCacheTTL: 2592000,
	},

	// Enable compression (standard but good to be explicit)
	compress: true,

	experimental: {
		// Optimization for common library imports
		// optimizePackageImports: ["lucide-react"],
	},

	// Headers for security and performance
	async headers() {
		return [
			{
				source: "/:path*",
				headers: [
					{
						key: "X-DNS-Prefetch-Control",
						value: "on",
					},
					{
						key: "Strict-Transport-Security",
						value: "max-age=63072000; includeSubDomains; preload",
					},
					{
						key: "X-Content-Type-Options",
						value: "nosniff",
					},
					{
						key: "X-Frame-Options",
						value: "DENY",
					},
					{
						key: "X-XSS-Protection",
						value: "1; mode=block",
					},
					{
						key: "Referrer-Policy",
						value: "strict-origin-when-cross-origin",
					},
					{
						key: "Permissions-Policy",
						value: "camera=(), microphone=(), geolocation=()",
					},
				],
			},
		];
	},
};

export default nextConfig;
