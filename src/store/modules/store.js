import Vue from 'vue';
import Vuex from 'vuex';
import product from "./product";

Vue.use(Vuex)

export const store=new Vuex.Store({
    state:{
        purchase:0.0,
        sale:0.0,
        balance:0.0
    },
    modules:{
        product
    }
})