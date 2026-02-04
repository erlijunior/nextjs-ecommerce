'use client'

import { X } from 'lucide-react'
import CartItem from './cart-item'
import { useCartStore } from '@/app/store/useCartStore'
import { motion } from 'motion/react'
import { formatCurrency } from '@/app/lib/utils'

const Cart = () => {
	const { toggleCart, cartIsOpen, cartItems, hasHydrated } = useCartStore()
	const total = hasHydrated
		? cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
		: 0

	return (
		<motion.aside
			initial={{ x: '100%' }}
			animate={{ x: cartIsOpen ? 0 : '100%' }}
			transition={{ type: 'spring', stiffness: 300, damping: 30 }}
			className='fixed top-0 right-0 bg-slate-200 shadow-2xl w-full sm:w-96 h-full grid grid-rows-[60px_1fr_105px] z-50'
		>
			<header className='flex items-center justify-center border-b border-slate-300'>
				<h2 className='text-xl font-semibold'>Seu Carrinho</h2>
				<button
					className='absolute top-4 right-4 cursor-pointer'
					aria-label='Fechar carrinho'
					onClick={toggleCart}
				>
					<X className='w-6 h-6' />
				</button>
			</header>
			<div className='p-4 overflow-y-auto space-y-2'>
				{!hasHydrated ? (
					<p className='text-center text-slate-500'>Carregando...</p>
				) : cartItems.length === 0 ? (
					<p className='text-center text-slate-500'>Seu carrinho está vazio.</p>
				) : (
					cartItems.map((item) => <CartItem key={item.product.id} item={item} />)
				)}
			</div>
			<footer className='flex flex-col gap-2 p-4 border-t border-slate-300'>
				<div className='flex justify-center items-center'>
					<span className='font-semibold'>
						Total: {hasHydrated ? formatCurrency(String(total)) : ''}
					</span>
				</div>
				<button className='btn btn-secondary text-white px-4 py-2 w-full rounded'>
					Finalizar Compra
				</button>
			</footer>
		</motion.aside>
	)
}
export default Cart
