import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    products: [],
    currentProduct: null,
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getProductById: (state) => (productId) => {
      return state.products.find((product) => product.id == productId);
    },
    getCurrentProduct(state) {
      return state.currentProduct;
    },
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setCurrentProduct(state, product) {
      state.currentProduct = product;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get('http://localhost:8080/products');
        commit('setProducts', response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchProductById({ commit }, productId) {
      try {
        const response = await axios.get(`http://localhost:8080/product?productId=${productId}`);
        commit('setCurrentProduct', response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {},
});
