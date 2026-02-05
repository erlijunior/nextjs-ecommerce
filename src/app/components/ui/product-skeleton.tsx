export function ProductSkeleton() {
	return (
		<section className='max-w-7xl mx-auto p-4 md:px-0 flex flex-col md:flex-row items-start gap-5'>
			{/* Product Image Skeleton */}
			<div className='w-full md:w-1/2 animate-pulse'>
				<div className='w-full h-96 md:h-[500px] bg-gray-300 rounded-lg'></div>
			</div>

			{/* Product Info Skeleton */}
			<div className='w-full md:w-1/2 animate-pulse'>
				<div className='flex flex-col'>
					<div className='pb-4'>
						{/* Category */}
						<div className='h-5 bg-orange-200 rounded w-24 mb-2'></div>
						{/* Product Name */}
						<div className='h-8 bg-gray-300 rounded w-3/4 mb-4'></div>
						{/* Price */}
						<div className='h-7 bg-green-200 rounded w-32'></div>
					</div>

					{/* Description */}
					<div className='space-y-2 mb-6'>
						<div className='h-4 bg-gray-300 rounded w-full'></div>
						<div className='h-4 bg-gray-300 rounded w-5/6'></div>
						<div className='h-4 bg-gray-300 rounded w-4/5'></div>
					</div>

					{/* Add to Cart Button */}
					<div className='h-12 bg-gray-300 rounded w-full'></div>
				</div>
			</div>
		</section>
	)
}
