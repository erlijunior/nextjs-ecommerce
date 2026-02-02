export function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className='py-4 bg-white border-t border-zinc-300 mt-8'>
			<div className='mx-auto px-4 max-w-7xl'>
				<div className='flex items-center justify-center gap-4'>
					<div className='flex items-center gap-2'>
						<span className='text-2xl font-display font-bold gradient-text'>EJ</span>
						<span className='text-muted-foreground'>|</span>
						<span className='text-muted-foreground text-sm'>
							© {currentYear} Erli Junior. Todos os direitos reservados.
						</span>
					</div>
				</div>
			</div>
		</footer>
	)
}
