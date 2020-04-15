import Vue from 'vue'
import Vuex from 'vuex'
import ProductService from '@/services/ProductService.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    products: [],
    product: {}
  },
  mutations: {
    SET_LOADING_STATUS(state) {
      state.isLoading = !state.isLoading;
    },
    SET_PRODUCTS(state, payload) {
      state.products = payload;
    },
    ADD_PRODUCT(state, product) {
      state.products.push(product)
    },
    SET_PRODUCT(state, payload) {
      state.product = payload;
    },
    REMOVE_PRODUCT(state, id) {
      state.products = state.products.filter(
        product => product.id != id
      )
    }
  },
  actions: {
    // object destructuring to get state and commit from the Vuex context object: { state, commit }.
    deleteProduct({commit}, id) {
      return ProductService.deleteProduct(id)
        .then(() => {        
          commit('REMOVE_PRODUCT', id);
        })
    },
    fetchProducts({commit}) {
      commit('SET_LOADING_STATUS');
      return ProductService.getProducts()
        .then(response => {
          commit('SET_PRODUCTS', response.data);
        })
        .finally(() => commit('SET_LOADING_STATUS'));      
    },
    addProduct({commit}, newProduct) {
      return ProductService.insertProduct(newProduct)
        .then(() => {        
          commit('ADD_PRODUCT', newProduct);
        })
    },
    fetchProduct({commit,getters}, id) {
      let p = getters.getProductById(id);
      if(p == null) {
        ProductService.getProduct(id)
          .then(response => {
            commit('SET_PRODUCT', response.data);
          })
      } else {
        commit('SET_PRODUCT', p);
      }
    }
  },
  getters: {
    getProductById: state => id => {
      return state.products.find(product => product.id === id);
    }
  },
  modules: {
  }
})
