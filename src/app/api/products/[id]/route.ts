import { NextResponse } from 'next/server'
import { readFileSync } from 'fs'
import { join } from 'path'
import { Product } from '@/app/types/product'

type Params = Promise<{ id: string }>

export async function GET(request: Request, { params }: { params: Params }) {
	try {
		const { id } = await params

		const filePath = join(process.cwd(), 'public', 'products.json')
		const fileContent = readFileSync(filePath, 'utf8')
		const products: Product[] = JSON.parse(fileContent)

		const product = products.find((prod) => prod.id === parseInt(id))

		if (!product) {
			return NextResponse.json({ error: 'Product not found' }, { status: 404 })
		}

		return NextResponse.json(product)
	} catch (error) {
		console.error('Error reading product:', error)
		return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 })
	}
}
