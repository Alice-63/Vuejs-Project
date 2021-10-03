import Vue from 'vue'
import App from './App.vue'
import {router} from './router';
import {store} from './store/modules/store'


new Vue({
  el: '#app',
  render: h => h(App),
router,
store
})
