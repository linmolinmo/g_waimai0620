import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'

import router from './router'
import GshopHeader from './components/GshopHeader/GshopHeader' 
import store from './store'

Vue.component('GshopHeader',GshopHeader)
// Vue.components('GshopHeader',GshopHeader)//多写了一个components

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')


new Vue({

  components: {App},
  template: '<App />',
  router,
  store,

 
}).$mount('#app')


