import { formatCurrency } from '@/app/lib/utils'
import { Product } from '@/app/types/product'
import Image from 'next/image'
import Link from 'next/link'

type ProductProps = {
	product: Product
}
const ProductCard = ({ product }: ProductProps) => {
	return (
		<div
			key={product.id}
			className='group rounded-lg shadow-sm md:hover:shadow-lg transition-shadow duration-200 cursor-pointer bg-white'
		>
			<div className='relative overflow-hidden h-auto bg-gray-200 mb-4 flex items-center justify-center'>
				<span className='absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs rounded z-5'>
					Última unidade
				</span>
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
				<Link href={`/product/${product.id}`}>
					<button className='btn btn-primary mt-2 w-full'>Ver detalhes</button>
				</Link>
			</div>
		</div>
	)
}
export default ProductCard
