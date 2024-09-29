<template>
  <div class="container mx-auto p-4">
    <div class="card lg:card-side bg-white shadow-xl">
      <figure class="lg:w-1/2">
        <img :src="product.image" alt="Product Image" class="object-cover w-full h-full rounded-lg" />
      </figure>

      <!-- Product Details -->
      <div class="card-body lg:w-1/2">
        <h2 class="card-title text-3xl font-bold">{{ product.title }}</h2>
        <p class="text-gray-500 mt-2">{{ product.description }}</p>
        <p class="text-2xl font-bold text-gray-700 mt-4">${{ product.price }}</p>

        <!-- Add to Cart Button -->
        <div class="card-actions justify-end mt-4">
          <button class="btn btn-primary" @click="addToCart">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

  const { params } = useRoute();
  const productStore = useProductStore();
  const productId = params.productId as string ?? '';
  const product = await productStore.fetchProductById(productId);

  const cartStore = useCartStore();

  const addToCart = () => {
    cartStore.addToCart(product);
  };


</script>
