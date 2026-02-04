'use client'
import { useEffect } from 'react'
import ProductCard from './product-card'
import { useProductStore } from '@/app/store/useProductStore'

const Products = () => {
	const { products, fetchProducts, loading, hasHydrated } = useProductStore()

	useEffect(() => {
		if (hasHydrated) {
			fetchProducts()
		}
	}, [fetchProducts, hasHydrated])

	if (!hasHydrated) {
		return (
			<section className='max-w-7xl mx-auto pt-8 px-4 xl:px-0'>
				<p>Inicializando...</p>
			</section>
		)
	}

	if (loading) {
		return (
			<section className='max-w-7xl mx-auto pt-8 px-4 xl:px-0'>
				<p>Carregando produtos...</p>
			</section>
		)
	}

	return (
		<section className='max-w-7xl mx-auto pt-8 px-4 xl:px-0'>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4'>
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</section>
	)
}
export default Products
