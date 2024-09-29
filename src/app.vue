<template>
  <div>
    <h1>Products</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.title }}
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
  import { productService } from './services/ProductService';
  import type { Product } from './types';

  const products = ref<Product[]>([]);

  onMounted(async () => {
    products.value = await productService.getProducts();
  });

</script>
