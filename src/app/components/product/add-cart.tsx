import { useCartStore } from '@/app/store/useCartStore'
import { Product } from '@/app/types/product'

type AddCartProps = {
	product: Product
}

const AddCart = ({ product }: AddCartProps) => {
	const { addToCart, toggleCart, cartIsOpen } = useCartStore()

	const handleAddToCart = () => {
		addToCart(product, 1)

		if (!cartIsOpen) toggleCart()
	}
	return (
		<button
			onClick={handleAddToCart}
			className='mt-4 w-full btn btn-primary font-bold py-2 px-4'
			aria-label={`Adicionar ${product.name} ao carrinho`}
		>
			Adicionar ao carrinho
		</button>
	)
}

export default AddCart
