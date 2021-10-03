import Vue from 'vue'
import App from './App.vue'
import {router} from './router';
import {store} from './store/modules/store';
import VueResource from 'vue-resource';

Vue.use(VueResource)

// purchase=> currency


Vue.filter("currency",(value)=>{
  return parseFloat(value).toLocaleString(undefined, {minimumFractionDigits:2})+ " €"
})

new Vue({
  el: '#app',
  render: h => h(App),
router,
store
})
