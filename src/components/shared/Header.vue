<template>
  <div>
<nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #563F7A">
    <router-link to="/" class="navbar-brand" >Product List</router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <router-link to="/product-sell" class="nav-link" href="#">Product Sell</router-link>
            </li>
            <li class="nav-item">
                <router-link to="product-purchase" class="nav-link" href="#">Product Purchase</router-link>
            </li>
        </ul>
    </div>
</nav>

  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>

</style>