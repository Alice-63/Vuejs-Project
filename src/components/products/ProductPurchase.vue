<template>
<div class="container">
    <div class="loading" :style="isLoading">
    <div class="lds-ripple">
        <div></div>
        <div></div>
    </div>
    </div>
    <div class="row">
        <div class="col-6 offset-3 pt-3 card mt-5 shadow">
            <div class="card-body">
                <h3>Product Purchase</h3>
                <hr>
                <div class="form-group">
                    <label>Product Titel</label>
                    <input v-model="product.titel" type="text" class="form-control" placeholder="Enter name...">
                </div>
                <div class="form-group">
                    <label>Count</label>
                    <input v-model="product.count" type="number" class="form-control" placeholder="Enter count">
                </div>
                <div class="form-group">
                    <label>Price</label>
                    <input v-model="product.price" type="number" class="form-control" placeholder="Enter price...">
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <textarea v-model="product.description" cols="30" rows="5" placeholder="Enter description..."
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
              
          },
          buttonClick:false
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
      },
      isLoading(){

          if(this.buttonClick)
          {
              return{
                  display:"block"
              }
          }
          else{
              return{
                  display:"none"
              }
          }
      }
  },
  beforeRouteLeave(to,from,next){
      if((this.product.titel.length>0 || this.product.count>0 || this.product.price>0 || this.product.description.length>0)&& !this.buttonClick)
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