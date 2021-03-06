import Vue from "vue";

export const setTradeResult=({state,commit}, tradeResult)=>{
commit("updateTradeResult",tradeResult);
let tradeData=
{
    purchase:state.purchase,
    sale:state.sale
}

Vue.http.put("https://product-list-e3612-default-rtdb.firebaseio.com/trade-result.json",tradeData)
.then(response =>{
    console.log(response)
    console.log(state.purchase)
    console.log(state.sale)
    console.log(state.balance)

    
})
}


export const getTradeResult=({commit})=>{


    Vue.http.get("https://product-list-e3612-default-rtdb.firebaseio.com/trade-result.json")
    .then(response=>{
        console.log(response)
        commit("updateTradeResult",response.body)
    })
}