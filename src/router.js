import Vue from 'vue';
import VueRouter from 'vue-router';
import ProductsList from './components/products/ProductsList.vue'
import ProductSell from './components/products/ProductSell.vue'
import ProductPurchase from './components/products/ProductPurchase.vue';

 Vue.use(VueRouter);

const routes=[
    {
        path:"/", 
        component:ProductsList
    },
    {
        path:"/urun-islemleri", 
        component:ProductSell
    },
    {
        path:"/urun-cikisi", 
        component:ProductPurchase
    },
    {
        path:"*", 
        redirect:"/"
    }
]

export const router=new VueRouter({
    mode:"history",
    routes
})