import Vue from 'vue'
import VueRouter from 'vue-routers'
import { component } from 'vue/types/umd'

 Vue.use(VueRouter)
 
const routers=[
    {
        path:"/", 
        component:()=> import('./components/products/ProductsList.vue')
    },
    {
        path:"/urun-islemleri", 
        component:()=> import('./components/products/ProductSell.vue')
    },
    {
        path:"/urun-cikisi", 
        component:()=> import('./components/products/ProductPurchase.vue')
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