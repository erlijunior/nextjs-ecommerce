import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { CartItemType } from '../types/cart'
import { Product } from '../types/product'

type CartStore = {
	cartItems: CartItemType[]
	addToCart: (product: Product, quantity: number) => void
	removeFromCart: (productId: number, quantity: number) => void
	updateQuantity: (productId: number, quantity: number) => void
	clearCart: () => void
	cartIsOpen: boolean
	toggleCart: () => void
	hasHydrated: boolean
	setHasHydrated: () => void
}

export const useCartStore = create<CartStore>()(
	persist(
		(set, get) => ({
			cartItems: [],
			cartIsOpen: false,
			addToCart: (product: Product, quantity: number) => {
				const existingItem = get().cartItems.find((item) => item.product.id === product.id)

				if (!existingItem) {
					set({ cartItems: [...get().cartItems, { product: product, quantity }] })
				} else if (existingItem && existingItem.quantity + quantity <= product.stock) {
					get().updateQuantity(product.id, existingItem.quantity + quantity)
				}
			},
			removeFromCart: (productId: number, quantity: number) => {
				const existingItem = get().cartItems.find((item) => item.product.id === productId)
				if (existingItem && existingItem.quantity > existingItem.product.stock) {
					get().updateQuantity(productId, existingItem.product.stock)
					return
				}
				if (existingItem && existingItem.quantity > quantity) {
					get().updateQuantity(productId, existingItem.quantity - quantity)
				} else {
					set({
						cartItems: get().cartItems.filter((item) => item.product.id !== productId),
					})
				}
			},
			updateQuantity: (productId: number, quantity: number) => {
				set({
					cartItems: get().cartItems.map((item) =>
						item.product.id === productId ? { ...item, quantity } : item,
					),
				})
			},
			clearCart: () => {
				set({ cartItems: [] })
			},
			toggleCart: () => {
				const cartIsOpen = get().cartIsOpen
				set({ cartIsOpen: !cartIsOpen })
			},
			hasHydrated: false,
			setHasHydrated: () => set({ hasHydrated: true }),
		}),
		{
			name: 'cart-storage',
			storage: createJSONStorage(() => localStorage),
			partialize: (state) => ({
				cartItems: state.cartItems,
				hasHydrated: state.hasHydrated,
			}),
			onRehydrateStorage: () => (state) => {
				state?.setHasHydrated()
			},
		},
	),
)
