import type { Product } from "~/types";

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    cart: [] as Product[],
  }),
  actions: {
    addToCart(product: Product) {
      this.cart.push(product);
    },
    removeFromCart(product: Product) {
      this.cart = this.cart.filter((p) => p.id !== product.id);
    },
    clearCart() {
      this.cart = [];
    },
  },
});