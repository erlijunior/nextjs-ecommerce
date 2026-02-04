import { NextResponse } from 'next/server'
import { readFileSync } from 'fs'
import { join } from 'path'

export async function GET() {
	try {
		const filePath = join(process.cwd(), 'public', 'products.json')
		const fileContent = readFileSync(filePath, 'utf8')
		const products = JSON.parse(fileContent)

		return NextResponse.json(products)
	} catch (error) {
		console.error('Error reading products:', error)
		return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
	}
}
