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
      if (this.products.length) return;
      this.products = await productService.getProducts(limit);
    },

    async fetchProductById(id: string) {
      return await productService.getProductById(id);
    },

    async fetchCategories() {
      if (this.categories.length) return;
      this.categories = await productService.getAllCategories();
    },

  },

  getters: {
    getProductsByCategory: (state) => (category: string) => {
      return state.products.filter((product) => product.category === category);
    },
    getProductsByQuery: (state) => (query: string) => {
      return state.products.filter(
        (product) => 
          product.title.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase())
        );
    },
    getProductsByCategoryAndQuery: (state) => (category: string, query: string) => {
      return state.products.filter((product) => {
        const matchesCategory = category ? product.category === category : true;
        const matchesQuery = query
          ? product.title.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase())
          : true;
        
        return matchesCategory && matchesQuery;
      });
    }
  },


});