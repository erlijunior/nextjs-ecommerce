import { formatCurrency } from '@/app/lib/utils'
import { Product } from '@/app/types/product'
import Image from 'next/image'
import Link from 'next/link'

type ProductProps = {
	product: Product
}
const ProductCard = ({ product }: ProductProps) => {
	return (
		<Link href={`/products/${product.id}`}>
			<div
				key={product.id}
				className='group rounded-lg shadow-sm md:hover:shadow-lg transition-shadow duration-200 cursor-pointer bg-white'
			>
				<div className='relative overflow-hidden h-auto bg-gray-200 mb-4 flex items-center justify-center'>
					<Image
						src={product.image}
						alt={`Produto ${product.id}`}
						className='object-cover h-full w-full group-hover:scale-105 transition-transform duration-200'
						width={500}
						height={500}
					/>
				</div>

				<div className='p-2 pt-0'>
					<span className='text-sm text-green-600'>{product.category}</span>
					<h2 className='text-lg font-normal mb-2 truncate'>{product.name}</h2>
					<div className='flex items-center justify-between'>
						<span className='text-xl font-bold'>{formatCurrency(String(product.price))}</span>
					</div>

					<button
						className='btn btn-primary mt-2 w-full'
						aria-label={`Ver detalhes do produto ${product.name}`}
					>
						Ver detalhes
					</button>
				</div>
			</div>
		</Link>
	)
}
export default ProductCard
