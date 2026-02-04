import { formatCurrency } from '@/app/lib/utils'
import { Product } from '@/app/types/product'
import AddCart from './add-cart'

type ProductProps = {
	product: Product
}

const ProductInfo = ({ product }: ProductProps) => {
	return (
		<div className='flex flex-col'>
			<div className='pb-4'>
				<span className='text-md font-semibold text-orange-400'>{product.category}</span>
				<h1 className='text-3xl font-bold mb-4'>{product.name}</h1>
				<h2 className='text-2xl font-bold text-green-500'>
					{formatCurrency(String(product.price))}
				</h2>
			</div>
			<p className='text-gray-700 mb-2'>{product.description}</p>
			<AddCart product={product} />
		</div>
	)
}

export default ProductInfo
