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
       return key=> state.products.filter(element =>{
            return element.key==key
        })
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
    sellProduct({state,commit,dispatch}, payload){

        let product= state.products.filter(element =>{
            return element.key==payload.key})

            if(product)
            {
                let totalCount=product[0].count-payload.count;

                Vue.http.patch("https://product-list-e3612-default-rtdb.firebaseio.com/products/"+payload.key+".json",{count:totalCount})

                product[0].count=totalCount

            }
            let tradeResult=
        {
            purchase:product[0].price,
            sale:0,
            count:payload.count
        }
        dispatch("setTradeResult",tradeResult)
        router.replace("/")

       
    }
}
export default
{
    state,
    getters,
    mutations,
    actions
}