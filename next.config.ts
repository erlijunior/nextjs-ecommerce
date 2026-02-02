import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'loremflickr.com',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'picsum.photos',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'i.pravatar.cc',
				pathname: '/**',
			},
		],
		// Limita tamanhos de device para economizar processamento
		deviceSizes: [640, 750, 828, 1080, 1200, 1920],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		// Amplia o cache de imagens otimizadas (padrão é 60s)
	},
}

export default nextConfig
