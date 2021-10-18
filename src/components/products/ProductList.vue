<template>
 
     <div class="container">
        <div class="row">
            <div class="col-12 mb-5 card mt-5 shadow">
                <div class="card-body">
                    <h3>Products List</h3>
                    <hr>
                    <table class="table table-hover table-striped table-bordered" v-if="getProducts.length>0" >
                        <thead>
                        <th >id</th>
                        <th>Product Name</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Description</th>
                        </thead>
                        <tbody>
                        <tr id="box" v-for="(product,index) in getProducts" :key="product.id" @click="newPage(index)">
                            <td class="align-middle text-center"><span class="badge badge-info"> {{product.key}} </span></td>
                            <td class="align-middle text-center"> {{product.titel }} </td>
                            <td class="align-middle text-center" :class="setClasses(product.count)"> {{product.count }} </td>
                            <td style="width: 120px;"> {{product.price |currency}}</td>
                            <td class="align-middle"> {{product.description }}</td>
                            <!-- <div id="descriptionBox">
                                <ul class="list-group">
                                    <li class="list-group-item">{{product.key}} </li>
                                    <li class="list-group-item">{{product.titel }}</li>
                                    <li class="list-group-item">{{product.count }}</li>
                                    <li class="list-group-item">{{product.price |currency}}</li>
                                    <li class="list-group-item">{{product.description }}</li>
                                </ul>
                            </div> -->
                        </tr>
                        </tbody>
    
                    </table>
                    <div class="alert alert-warning" v-else>
                        <strong>Nothing here yet</strong>
                        <br>
                        <small>You can use the Product purchase menu to add a entry
                        </small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {

    computed:{
        ...mapGetters(["getProducts"])
    },
    methods:
    {
        setClasses(count){
            return{
                "bg-danger text-white":count==0 ||count==null ,
                "bg-success text-white":count>0
            }
        },
        newPage(event){
            let newProduct=this.getProducts[event];
           console.log (newProduct.titel,newProduct.count,newProduct.description)
        }
    }
  
}
</script>
<style scoped>
td:hover
{
    cursor: pointer;
}
#descriptionBox
{
    width: 400px;
    height: 400px;
    position: absolute;
    top: 0;
    left: 0;
}
#box
{
    position: relative;
}
</style>