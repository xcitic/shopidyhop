<template>
  <NuxtLink :to="{ name: 'products-productId', params: { productId: product.id } }" class="bg-white shadow-lg rounded-lg">
    <img :src="product.image" alt="product image" class="w-full h-48 object-cover" />
    <div class="mt-4 flex flex-col justify-between items-center p-4 h-48">
      <h1 class="text-xl font-bold text-black line-clamp-3">{{ product.title }}</h1>
      <p class="text-gray-700 font-bold">${{ product.price }}</p>
    </div>
  </NuxtLink>
</template>
<script setup lang="ts">
  import type { Product } from '~/types';

  const { product } = defineProps<{
    product: Product;
  }>();
</script>