// import { useCartStore } from '@/app/store/useCartStore'
import { Product } from '@/app/types/product'

type AddCartProps = {
	product: Product
}

const AddCart = ({ product }: AddCartProps) => {
	// const addToCart = useCartStore((state) => state.addToCart)
	// const toggleCart = useCartStore((state) => state.toggleCart)

	const handleAddToCart = () => {
		// addToCart(product, 1)
		// toggleCart()
	}
	return (
		<button onClick={handleAddToCart} className='mt-4 w-full btn btn-primary font-bold py-2 px-4'>
			Adicionar ao carrinho
		</button>
	)
}

export default AddCart
