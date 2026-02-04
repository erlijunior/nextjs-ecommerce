import { Product } from '@/app/types/product'

export async function getProducts(): Promise<Product[]> {
	const response = await fetch('./products.json')

	console.log(response)

	if (!response.ok) {
		throw new Error('Failed to fetch products')
	}

	const products = await response.json()
	return products
}

export async function getProductById(id: string): Promise<Product | null> {
	const response = await fetch('../products.json')
	console.log('response', response)

	if (!response.ok) {
		throw new Error('Failed to fetch products')
	}
	const products: Product[] = await response.json()
	const product = products.find((prod) => prod.id === parseInt(id))
	return product || null
}
