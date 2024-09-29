import type { Product } from "~/types";
import type { CartItem } from "~/types/cart";


export const useCartStore = defineStore('cartStore', {
  state: () => ({
    cart: [] as CartItem[],
  }),
  actions: {
    addToCart(product: Product) {
      const existingProduct = this.cart.findIndex((p) => p.id === product.id);
      if (existingProduct > -1) {
        const p = this.cart.splice(existingProduct, 1)[0];
        this.cart[existingProduct] = { ...p, quantity: p.quantity + 1 };
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(productId: string) {
      this.cart = this.cart.filter((p) => p.id !== productId);
    },
    updateQuantity(productId: string, quantity: number) {
      const product = this.cart.find((p) => p.id === productId);
      if (product) {
        product.quantity = quantity;
      }
    },
    clearCart() {
      this.cart = [];
    },
  },
});