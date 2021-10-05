<template>
<div class="container">
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
                        disabled
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
                    <input type="text" class="form-control" placeholder="Ürün adetini giriniz..">
                </div>
                <hr>
                <button class="btn btn-primary">Save</button>
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
            product:null
        }
    },
  computed:
  {
      ...mapGetters(["getProducts"]),
     
  },
  methods:{
       productSelected(){
          this.product=this.$store.getters.getProduct(this.selectedProduct)[0]
          
      }
  }
}
</script>
<style scoped>

 .border-danger {
            border-style: dashed !important;
        }
</style>