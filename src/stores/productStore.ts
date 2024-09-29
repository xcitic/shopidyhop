import { defineStore } from 'pinia';
import { productService } from '~/services/productService';
import type { Product } from '~/types';


interface ProductStoreState {
  products: Product[];
  categories: string[];
}

export const useProductStore = defineStore({
  id: 'productStore',

  state: () => ({
    products: [],
    categories: [],
  }) as ProductStoreState,

  actions: {
    async fetchProducts(limit: number = 20) {
      this.products = await productService.getProducts(limit);
    },

    async fetchProductById(id: string) {
      return await productService.getProductById(id);
    },

    async fetchCategories() {
      this.categories = await productService.getAllCategories();
    },

  },


});