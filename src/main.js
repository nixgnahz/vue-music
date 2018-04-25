import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store/store'

import iView from 'iview'
import 'iview/dist/styles/iview.css'

import '../static/common.css'

Vue.use(iView)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
