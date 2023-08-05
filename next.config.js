/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
		serverActions: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "github-readme-stats.vercel.app",
				// port: "",
				// pathname: "/api/pin/?username=YugandharrPatil",
			},
		],
	},
};

module.exports = nextConfig;
