import Vue from "vue";

export const setTradeResult=({state}, tradeResult)=>{
commit("updateTradeResult",tradeResult);
Vue.http.put("https://product-list-e3612-default-rtdb.firebaseio.com/trade-result.json")
}


export const getTradeResult=({commit})=>{

}