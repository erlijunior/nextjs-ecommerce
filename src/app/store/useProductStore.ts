import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { Product } from '../types/product'
import { getProductById, getProducts } from '@/actions/product.actions'

type ProductStore = {
	loading: boolean
	products: Product[]
	product: Product | null
	getProductById: (id: number) => Promise<void>
	fetchProducts: () => Promise<void>
	hasHydrated: boolean
	setHasHydrated: () => void
}

export const useProductStore = create<ProductStore>()(
	persist(
		(set) => ({
			cartItems: [],
			loading: false,
			product: null,
			products: [],
			fetchProducts: async () => {
				set({ loading: true })
				const products: Product[] = await getProducts()
				set({ products: products, loading: false })
			},
			getProductById: async (id: number) => {
				const product: Product | null = await getProductById(String(id))
				set({ product })
			},
			hasHydrated: false,
			setHasHydrated: () => set({ hasHydrated: true }),
		}),
		{
			name: 'product-storage',
			storage: createJSONStorage(() => localStorage),
			onRehydrateStorage: () => (state) => {
				state?.setHasHydrated()
			},
		},
	),
)
