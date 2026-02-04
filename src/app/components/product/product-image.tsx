import Image from 'next/image'

type ProductImageProps = {
	imageUrl: string
	name: string
}

const ProductImage = ({ imageUrl, name }: ProductImageProps) => {
	return (
		<div className='w-full h-auto flex items-center justify-center overflow-hidden bg-white'>
			<Image
				src={imageUrl}
				alt={name}
				width={500}
				height={500}
				className='object-contain h-full w-full'
			/>
		</div>
	)
}

export default ProductImage
