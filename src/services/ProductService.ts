import type { Product, ProductCategory } from '~/types';
import { apiService } from './ApiService';
import type { ApiService } from './ApiService';


class ProductService {
  apiService: ApiService;

  constructor(apiService: ApiService) {
    this.apiService = apiService;
  }

  async getProducts(limit: number = 20) {
    return await this.apiService.get(`https://fakestoreapi.com/products?limit=${limit}`) as Product[];
  }

  async getProductById(id: string) {
    if (!id) {
      throw new Error('Product ID is required');
    }
    return await this.apiService.get(`https://fakestoreapi.com/products/${id}`) as Product;
  }

  async getAllCategories() {
    return await this.apiService.get(`https://fakestoreapi.com/products/categories`) as ProductCategory[];
  }

  async getProductsByCategory(category: string) {
    if (!category) {
      throw new Error('Category is required');
    }
    return await this.apiService.get(`https://fakestoreapi.com/products/category/${category}`) as Product[];
  }
}


export const productService = new ProductService(apiService);


