'use client'
import { getProducts } from '@/actions/product.actions'
import { Product } from '@/app/types/product'
import { useEffect, useState } from 'react'
import ProductCard from './product-card'

const Products = () => {
	const [products, setProducts] = useState<Product[]>([])
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		// Simulação de fetch de produtos
		const fetchProducts = async () => {
			// Aqui você pode substituir pela chamada real à API
			const fetchedProducts = await getProducts()
			setProducts(fetchedProducts)
			setLoading(false)
		}

		fetchProducts()
	}, [])

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
