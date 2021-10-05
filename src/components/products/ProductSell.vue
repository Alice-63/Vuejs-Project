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
                <h3>Product Sell</h3>
                <hr>
                <div class="form-group">
                    <label>Product Name</label>
                    <select class="form-control" v-model="selectedProduct" @change="productSelected">
                        <option :value="product.key" 
                        v-for="product in getProducts" 
                        :key="product.id"
                        :disabled="product.count==0"
                        >{{product.titel}}
                        
                        </option>

                    </select>
                </div>
                <div class="card mb-2 border border-danger animate__animated animate__zoomIn " v-if="product!==null"  >
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12 text-center">
                                <div class="mb-3">
                                    <span class="badge badge-info">Stock : {{product.count}}</span>
                                    <span class="badge badge-primary">Price : {{product.price | currency}}</span>
                                </div>
                                <p class="border border-warning p-2 text-secondary">{{product.description}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label>Count</label>
                    <input v-model="product_count" type="text" class="form-control" placeholder="Ürün adetini giriniz..">
                </div>
                <hr>
                <button @click="save" class="btn btn-primary">Save</button>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return{
            selectedProduct:null,
            product:null,
            product_count:null,
            buttonClick:false
        }
    },
  computed:
  {
      ...mapGetters(["getProducts"]),
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
  methods:{
       productSelected(){
          this.product=this.$store.getters.getProduct(this.selectedProduct)[0]
          
      },
      save(){
          this.buttonClick=true
          let product={
              key:this.selectedProduct,
              count:this.product_count
          }
          this.$store.dispatch("sellProduct", product)
      }
  },
  beforeRouteLeave(to,from,next){
      if((this.selectedProduct!==null || this.product_count>0) && !this.buttonClick )
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

 .border-danger {
            border-style: dashed !important;
        }
</style>