<template>
  <nav class="text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div v-if="currentRoute !== '/'" to="/"  class="text-white" @click="goBack">
        < Back
      </div>


      <NuxtLink 
        v-if="currentRoute !== '/cart'" 
        to="/cart" 
        class="bg-blue-500 text-white px-4 py-2 rounded-lg ml-auto">
        Cart {{ cartCount > 0 ? `(${cartCount})` : '' }}
      </NuxtLink>
    </div>
  </nav>

</template>
<script setup lang="ts">
  const routes = useRoute();
  const currentRoute = computed(() => routes.path);

  const router = useRouter();

  const goBack = () => {
    router.go(-1);
  };

  const cartStore = useCartStore();
  const cartCount = computed(() => cartStore.cart.length);


</script>