<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-6">Your Cart</h1>

    <div v-if="cartItems.length > 0">
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th class="w-20">Image</th>
              <th>Title</th>
              <th class="text-right">Price</th>
              <th class="text-center">Quantity</th>
              <th class="text-right">Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cartItems" :key="item.id">
              <td>
                <img :src="item.image" alt="product image" class="w-16 h-16 object-cover rounded" />
              </td>

              <td>
                <p class="font-bold">{{ item.title }}</p>
              </td>

              <td class="text-right">
                <p class="text-gray-700 font-bold">${{ item.price }}</p>
              </td>

              <td class="text-center">
                <input
                  type="number"
                  min="1"
                  v-model.number="item.quantity"
                  @change="updateQuantity(item)"
                  class="input input-bordered w-16 text-center"
                />
              </td>

              <td class="text-right">
                <button class="btn btn-error btn-sm" @click="removeFromCart(item.id)">
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="text-right mt-4">
        <p class="text-2xl font-bold">Total: ${{ cartTotal }}</p>
      </div>
    </div>
    
    <div v-else>
      <p class="text-gray-500">Your cart is empty.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useCartStore } from '~/stores/cartStore';
import type { CartItem } from '~/types';

const cartStore = useCartStore();
const cartItems = computed(() => cartStore.cart);

// Calculate total price
const cartTotal = computed(() =>
  cartStore.cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
);


const updateQuantity = (item: CartItem) => {
  if (item.quantity < 1) item.quantity = 1;
  cartStore.updateQuantity(item.id, item.quantity);
};


// Remove item from cart
const removeFromCart = (id: string) => {
  cartStore.removeFromCart(id);
};
</script>