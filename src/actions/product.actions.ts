import { Product } from '@/app/types/product'

export async function getProducts(): Promise<Product[]> {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/products`,
		{
			cache: 'no-store',
		},
	)

	if (!response.ok) {
		throw new Error('Failed to fetch products')
	}

	const products = await response.json()
	return products
}

export async function getProductById(id: string): Promise<Product | null> {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/products/${id}`,
		{
			cache: 'no-store',
		},
	)

	if (!response.ok) {
		if (response.status === 404) {
			return null
		}
		throw new Error('Failed to fetch product')
	}

	const product: Product = await response.json()
	return product
}
