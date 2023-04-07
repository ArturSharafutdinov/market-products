import { createStore } from 'vuex'

const createProducts = (count) => {
  const products = [];
  for (let i = 0; i<count;i++) {
    products.push({
      id: i,
      name: `Product ${i}`,
      description: `Description ${i}`,
      price: Math.floor(Math.random() * 1000),
      rating: Math.floor(Math.random() * 4 + 1)
    })
  }
  return products;
}

export default createStore({
  state: () => ({
    products: createProducts(10)
  }),
  getters: {
    getProducts(state) {
      return state.products;
    },
    getProductById : (state) => (productId) => {
      return state.products.find((product) => product.id == productId);
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
