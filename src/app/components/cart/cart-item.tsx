import { formatCurrency } from '@/app/lib/utils'
import { useCartStore } from '@/app/store/useCartStore'
import { CartItemType } from '@/app/types/cart'
import { Minus, Plus } from 'lucide-react'
import Image from 'next/image'

type ItemProps = {
	item: CartItemType
}
const CartItem = ({ item }: ItemProps) => {
	const { removeFromCart, addToCart } = useCartStore()

	return (
		<div className='flex justify-between bg-zinc-100 text-black p-2 border-b border-gray-300 gap-5'>
			<Image
				src={item.product.image}
				alt={item.product.name}
				width={80}
				height={80}
				className='object-cover'
			/>
			<div className='flex flex-col justify-between flex-1'>
				<h3 className='font-semibold text-md line-clamp-2'>{item.product.name}</h3>
				<p className='text-sm text-gray-600'>{formatCurrency(String(item.product.price))}</p>
			</div>
			<div className='flex justify-between items-center gap-2'>
				<button
					className='bg-gray-200 rounded-full w-6 h-6 cursor-pointer'
					onClick={() => removeFromCart(item.product.id, 1)}
				>
					<Minus className='w-4 h-4 m-auto text-gray-600' />
				</button>
				<span className='text-sm text-gray-600'>{item.quantity}</span>
				<button
					className='bg-gray-200 rounded-full w-6 h-6 cursor-pointer'
					onClick={() => addToCart(item.product, 1)}
				>
					<Plus className='w-4 h-4 m-auto text-gray-600' />
				</button>
			</div>
		</div>
	)
}
export default CartItem
