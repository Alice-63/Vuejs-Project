import Vue from "vue"
import { router } from "../../router"

const state={
    products:[]
}
const getters={
    getProducts(state){
        return state.products
    },
    getProduct(state){

    }
}
const mutations={
    updateProductList(state,product){
        state.products.push(product)
    }
}
const actions={
    innitApp({commit}){
        Vue.http.get("https://product-list-e3612-default-rtdb.firebaseio.com/products.json")
        .then(response=>{
            console.log(response)
            let data=response.body
            for(let key in data)
            {
                data[key].key=key;
                commit("updateProductList",data[key])
            }
        })
    },
    saveProduct({dispatch,commit,state},product){
        Vue.http.post("https://product-list-e3612-default-rtdb.firebaseio.com/products.json",product)
        .then(response=>{

            // Product Update
          product.key=response.body.name
          commit("updateProductList",product)

        //   Trade Update

        let tradeResult=
        {
            purchase:product.price,
            sale:0,
            count:product.count
        }
        dispatch("setTradeResult",tradeResult)
        router.replace("/")
      
        })
    },
    sellProduct({commit}, payload){}
}
export default
{
    state,
    getters,
    mutations,
    actions
}