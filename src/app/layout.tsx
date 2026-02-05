import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from './components/header/header'
import { Footer } from './components/footer/footer'
import Cart from './components/cart/cart'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Mini E-commerce - Produtos para Desenvolvedores',
	description:
		'Loja online com camisetas, canecas e acessórios exclusivos para desenvolvedores. Produtos de qualidade com entrega rápida.',
	keywords: 'ecommerce, developer, camisetas, canecas, programador',
	authors: [{ name: 'Erli Junior' }],
	openGraph: {
		title: 'Mini E-commerce',
		description: 'Produtos exclusivos para desenvolvedores',
		type: 'website',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-100`}>
				<Header />
				<main className='min-h-screen py-16'>{children}</main>
				<Footer />
				<Cart />
			</body>
		</html>
	)
}
