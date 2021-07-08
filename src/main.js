import 'core-js/stable'
import 'regenerator-runtime/runtime'
import VueContentPlaceholders from 'vue-content-placeholders'
import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@/theme/custom.scss'

Vue.config.productionTip = false

Vue.use(VueContentPlaceholders)
Vue.use(BootstrapVue)

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
