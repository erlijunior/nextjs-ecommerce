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
	title: 'Nextjs Eccomerce',
	description: ' Desenvolvido por Erli Junior - Next.js@16.1.6',
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
