'use client'

import { useCartStore } from '@/app/store/useCartStore'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
	const { toggleCart, cartItems, hasHydrated } = useCartStore()

	const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

	return (
		<header className='fixed top-0 left-0 w-full p-4 bg-white shadow-md z-10'>
			<nav className='flex items-center justify-between max-w-7xl mx-auto'>
				<Link href='/'>
					<h1 className='text-xl font-bold uppercase'>Next.js Ecommerce</h1>
				</Link>
				<button className='cursor-pointer relative' aria-label='Carrinho' onClick={toggleCart}>
					<ShoppingCart size={24} />
					{hasHydrated && totalItems > 0 && (
						<span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
							{totalItems}
						</span>
					)}
				</button>
			</nav>
		</header>
	)
}

export default Header
