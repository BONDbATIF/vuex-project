import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [
      { name: "Green skin", price: 20 },
      { name: "while light", price: 70 },
      { name: "laddu shell", price: 100 },
      { name: "Rde shell", price: 80 }
    ]
  },
  getters: {
    saleProducts:(state)=> {
      var saleProducts = state.products.map(product => {
        return {
          name: "***"+product.name+"***",
          price: product.price
        }
      })
      return saleProducts;
    }
  },
  mutations:{
    reducePrice:(state,payload) =>{
          state.products.forEach(product => {
            product.price -=payload;
          });
    }
  },

  actions:{
    reducePrice:(context,payload)=>{
      setTimeout(() => {
        context.commit('reducePrice',payload)
      }, 3000);
    }
  }

})