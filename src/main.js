import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import "./vee-validate"


Vue.use(Buefy)
Vue.component('vee-provider', ValidationProvider)
Vue.component('vee-observer', ValidationObserver)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
