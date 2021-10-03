<template>
<div class="container">
    <div class="row">
        <div class="col-6 offset-3 pt-3 card mt-5 shadow">
            <div class="card-body">
                <h3>Ürün İşlemleri</h3>
                <hr>
                <div class="form-group">
                    <label>Product Titel</label>
                    <input v-model="product.titel" type="text" class="form-control" placeholder="Ürün adını giriniz..">
                </div>
                <div class="form-group">
                    <label>Count</label>
                    <input v-model="product.count" type="number" class="form-control" placeholder="Ürün adetini giriniz..">
                </div>
                <div class="form-group">
                    <label>Price</label>
                    <input v-model="product.price" type="number" class="form-control" placeholder="Ürün fiyatı giriniz..">
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <textarea v-model="product.description" cols="30" rows="5" placeholder="Ürüne ait bir açıklama giriniz..."
                              class="form-control"></textarea>
                </div>
                <hr>
                <button class="btn btn-primary" @click="saveProduct" disabled>Save</button>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
  data(){
      return{
          product:{
              titel:"",
              count:null,
              price:null,
              description:""
          }
      }
  },
  methods:
  {
      saveProduct(){
          this.$store.dispatch("saveProduct",this.product)
      }
  },
  computed:
  {
      saveEnable(){

      }
  }
}
</script>
<style scoped>

</style>