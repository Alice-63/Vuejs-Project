import Vue from "vue";

export const setTradeResult=({state}, tradeResult)=>{
commit("updateTradeResult",tradeResult);
let tradeData=
{
    purchase:state.purchase,
    sale:state.sale
}
Vue.http.put("https://product-list-e3612-default-rtdb.firebaseio.com/trade-result.json",tradeData)
}


export const getTradeResult=({commit})=>{

}