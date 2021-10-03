import Vue from "vue"

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

    },
    saveProduct({commit},state,product){
        Vue.http.post("https://product-list-e3612-default-rtdb.firebaseio.com/products.json",product)
        .then(response=>{
          product.key=response.body.name
          commit("updateProductList",product)
          console.log(state.products)
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