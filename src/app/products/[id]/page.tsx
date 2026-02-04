import Product from '@/app/components/product/product'

type ProductPageProps = {
	params: {
		id: string
	}
}

const ProductPage = async ({ params }: ProductPageProps) => {
	const { id } = await params
	return (
		<div>
			<Product id={id} />
		</div>
	)
}

export default ProductPage
