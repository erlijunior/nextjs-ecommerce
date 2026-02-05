export function ProductCardSkeleton() {
	return (
		<div className='animate-pulse rounded-lg shadow-sm bg-white overflow-hidden'>
			{/* Product Image */}
			<div className='relative h-48 md:h-56 bg-gray-300 mb-4'></div>

			{/* Product Info */}
			<div className='p-2 pt-0'>
				{/* Category */}
				<div className='h-4 bg-green-200 rounded w-20 mb-2'></div>

				{/* Product Name */}
				<div className='h-5 bg-gray-300 rounded w-4/5 mb-2'></div>

				{/* Price */}
				<div className='flex items-center justify-between mb-2'>
					<div className='h-6 bg-gray-300 rounded w-24'></div>
				</div>

				{/* Button */}
				<div className='h-10 bg-gray-300 rounded w-full mt-2'></div>
			</div>
		</div>
	)
}
