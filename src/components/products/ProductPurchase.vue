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
                <button class="btn btn-primary" @click="saveProduct" :disabled="saveEnable">Save</button>
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
              description:"",
              buttonClick:false
          }
      }
  },
  methods:
  {
      saveProduct(){
          this.buttonClick=true
          this.$store.dispatch("saveProduct",this.product)
      }
  },
  computed:
  {
      saveEnable(){
          if(this.product.titel.length>0 && this.product.count>0 && this.product.price>0 && this.product.description.length>0)
          {
              return false
          }
          else{
              return true
          }
      }
  },
  beforeRouteLeave(to,from,next){
      if(this.product.titel.length>0 || this.product.count>0 || this.product.price>0 || this.product.description.length>0)
      {
          if(confirm("Kaydedilmemis Degisiklikler var! Yinede Devam Etmek Istiyor musunuz?"))
          {
              next()
          }
          else{
              next(false)
          }
      }
      else{
          next()
      }
     
     
  }
}
</script>
<style scoped>

</style>