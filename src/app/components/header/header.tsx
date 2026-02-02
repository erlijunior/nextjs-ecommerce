import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
	return (
		<header className='fixed top-0 left-0 w-full p-4 bg-white shadow-md z-10'>
			<nav className='flex items-center justify-between max-w-7xl mx-auto'>
				<Link href='/'>
					<h1 className='text-xl font-bold uppercase'>Next.js Ecommerce</h1>
				</Link>
				<Link href='/cart' aria-label='Carrinho'>
					<ShoppingCart size={24} />
				</Link>
			</nav>
		</header>
	)
}

export default Header
