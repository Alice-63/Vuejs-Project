<template>
  <div>
<Header/>
<ProductSell/>
<Footer/>
  </div>
</template>
<script>
import Header from './components/shared/Header.vue'
import Footer from './components/shared/Footer.vue'
import ProductPurchase from './components/products/ProductPurchase.vue'
import ProductSell from './components/products/ProductSell.vue'



export default {
  components:
  {
    Header,
    Footer,
    ProductPurchase,
    ProductSell
  }
}
</script>
<style scoped>

</style>