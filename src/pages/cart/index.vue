<template>
  <div>
    Cart {{ cartCount.length }}
  </div>
</template>
<script setup lang="ts">

  const cartStore = useCartStore();

  const cartCount = computed(() => cartStore.cart);

</script>