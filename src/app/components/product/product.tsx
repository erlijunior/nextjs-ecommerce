'use client'
import { useProductStore } from '@/app/store/useProductStore'
import { useEffect } from 'react'
import ProductImage from './product-image'
import ProductInfo from './product-info'
import { ProductSkeleton } from '../ui/product-skeleton'
type ProductProps = {
	id: string
}

const Product = ({ id }: ProductProps) => {
	const { product, fetchProductById } = useProductStore()

	useEffect(() => {
		fetchProductById(Number(id))
	}, [fetchProductById, id])

	// Verifica se o produto carregado é o correto
	const isCorrectProduct = product && product.id === Number(id)

	if (!isCorrectProduct) {
		return <ProductSkeleton />
	}

	return (
		<section className='max-w-7xl mx-auto p-4 md:px-0 flex flex-col md:flex-row items-center gap-5'>
			<ProductImage imageUrl={product.image} name={product.name} />
			<ProductInfo product={product} />
		</section>
	)
}

export default Product
