export function formatCurrency(value: string) {
	const numberValue = Number(value)
	return new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(numberValue)
}
