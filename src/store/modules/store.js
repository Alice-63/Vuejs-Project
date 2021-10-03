import Vue from 'vue';
import Vuex from 'vuex';
import product from "./product"

Vue.use(Vuex)

export const store=new Vuex.Store({
    state:{},
    modules:{
        product
    }
})