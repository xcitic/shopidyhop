<template>
  <div className="p-12">
    <div class="flex flex-row mb-2">
      <NuxtLink to="/cart" class="bg-blue-500 text-white px-4 py-2 rounded-lg self-end">Cart</NuxtLink>
    </div>

    <div class="flex flex-row justify-between mb-4">
      <CategoryFilter :categories="categories" v-model="selectedCategory"/>
      <Searchbar v-model="query"/>
    </div>
    <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-8">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
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
  const products = computed(() => productStore.products);

  const selectedCategory = ref('');

  const query = ref('');

  /**
    watch(query, async (newQuery) => {
      await productStore.fetchProducts(newQuery);
    });

   */
</script>
