'use client'
import { useProductStore } from '@/app/store/useProductStore'
import { useEffect } from 'react'
import ProductImage from './product-image'
import ProductInfo from './product-info'
type ProductProps = {
	id: string
}

const Product = ({ id }: ProductProps) => {
	const product = useProductStore((state) => state.product)
	const fetchProductById = useProductStore((state) => state.fetchProductById)

	useEffect(() => {
		fetchProductById(Number(id))
	}, [fetchProductById, id])

	if (!product) {
		return <div>Produto não encontrado.</div>
	}

	return (
		<section className='max-w-7xl mx-auto p-4 md:px-0 flex flex-col md:flex-row items-center gap-5'>
			<ProductImage imageUrl={product.image} name={product.name} />
			<ProductInfo product={product} />
		</section>
	)
}

export default Product
