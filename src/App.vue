<template>
  <div>
<Header/>
<router-view class="animate__animated animate__zoomIn"></router-view>
<Footer/>
  </div>
</template>
<script>
import Header from './components/shared/Header.vue'
import Footer from './components/shared/Footer.vue'
// import ProductPurchase from './components/products/ProductPurchase.vue'
// import ProductSell from './components/products/ProductSell.vue'
// import ProductList from './components/products/ProductList.vue'





export default {
  components:
  {
    Header,
    Footer,
    // ProductPurchase,
    // ProductSell,
    // ProductList
  },
  created(){
    this.$store.dispatch("getTradeResult");
  }
}
</script>
<style>
body{
  background-color:#a7a0bb5c;
}
</style>