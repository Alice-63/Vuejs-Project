<template>
  <div>
<Header/>
<router-view></router-view>
<Footer/>
  </div>
</template>
<script>
import Header from './components/shared/Header.vue'
import Footer from './components/shared/Footer.vue'
// import ProductPurchase from './components/products/ProductPurchase.vue'
// import ProductSell from './components/products/ProductSell.vue'
// import ProductsList from './components/products/ProductsList.vue'





export default {
  components:
  {
    Header,
    Footer,
    // ProductPurchase,
    // ProductSell,
    // ProductsList
  }
}
</script>
<style scoped>

</style>