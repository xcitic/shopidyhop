<template>
  <div>
    <div class="flex lg:flex-row flex-col gap-4 justify-between mb-4">
      <CategoryFilter :categories="categories" v-model="selectedCategory"/>
      <Searchbar v-model="query"/>
    </div>
    <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-8">
      <ProductCard v-for="product in productsToDisplay" :key="product.id" :product="product" />
    </div>
  </div>
</template>
<script setup lang="ts">
  const productStore = useProductStore();

  onMounted(async () => {
    await productStore.fetchProducts();
    await productStore.fetchCategories();
  });

  const categories = computed(() => productStore.categories);
  const selectedCategory = ref('');
  const query = ref('');

  const productsToDisplay = computed(() => {
    if (selectedCategory.value && query.value) {
      return productStore.getProductsByCategoryAndQuery(selectedCategory.value, query.value);
    }
    if (selectedCategory.value) {
      return productStore.getProductsByCategory(selectedCategory.value);
    } 
    if (query.value) {
      return productStore.getProductsByQuery(query.value);
    }
    
    return productStore.products;
    
  });


</script>
