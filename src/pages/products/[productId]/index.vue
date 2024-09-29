<template>
  <div>
    <p>{{ product.description }}</p>
  </div>
</template>

<script setup lang="ts">

const { params } = useRoute();
  const productStore = useProductStore();
  const productId = params.productId as string ?? '';
  const product = await productStore.fetchProductById(productId);

</script>
