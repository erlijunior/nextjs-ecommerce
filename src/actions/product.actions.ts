import { Product } from '@/app/types/product'

export async function getProducts(): Promise<Product[]> {
	// Simulação de uma chamada à API para buscar produtos
	const response = await fetch('./products.json')

	console.log(response)

	if (!response.ok) {
		throw new Error('Failed to fetch products')
	}

	const products = await response.json()
	return products
}
