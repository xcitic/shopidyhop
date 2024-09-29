<template>
  <select class="select select-bordered w-full max-w-xs" v-model="selectedCategory">
    <option disabled selected value="">Filter by category</option>
    <option v-for="(category, index) in categories" :key="index" :value="category">{{ category }}</option>
    <option value="">Show all</option>
  </select>
</template>
<script setup lang="ts">

  const selectedCategory = defineModel()

  const { categories } = defineProps<{
    categories: string[];
  }>();

</script>