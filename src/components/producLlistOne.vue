<template lang="pug">
    #product-list-one
      h2 Product List One
      ul
       li(v-for="product in saleProducts")
        span.name {{product.name}}
        span.price ${{product.price}}
       button(type='submit' v-on:click="reducePrice(4)") reduce Price
</template>>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    ...mapGetters(["saleProducts"])
    // saleProducts(){
    //     return this.$store.getters.saleProducts
    // }
  },
  methods: {
    // reducePrice:function (amount){
    //   //  this.$store.commit('reducePrice');
    //   this.$store.dispatch('reducePrice',amount);
    // }
    ...mapActions(["reducePrice"])
  }
};
</script>

<style scoped>
#product-list-one {
  background: #fff8b1;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#product-list-one ul {
  padding: 0;
}
#product-list-one li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  font-weight: bold;
  color: #e8800c;
}
</style>

