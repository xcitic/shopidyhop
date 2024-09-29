import { useCartStore } from "@/stores/cartStore";

export default defineNuxtPlugin(() => {
  const cartStore = useCartStore();

  const storedCart = sessionStorage.getItem('cart');
  if (storedCart) {
    cartStore.cart = JSON.parse(storedCart);
  }

  // Subscribe to cart changes and store them in session storage
  cartStore.$subscribe((mutation, state) => {
    sessionStorage.setItem('cart', JSON.stringify(state.cart));
  });
});