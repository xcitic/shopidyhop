<template>
  <div>
    <h1>Categories</h1>
    <ul>
      <li v-for="(category, index) in categories" :key="index">
        {{ category }}
      </li>
    </ul>
    <h1>Products</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.title }}
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
  const productStore = useProductStore();

  onMounted(async () => {
    await productStore.fetchProducts();
    await productStore.fetchCategories();
  });

  const categories = computed(() => productStore.categories);
  const products = computed(() => productStore.products);


</script>
