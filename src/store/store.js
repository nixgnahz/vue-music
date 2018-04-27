import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import searchModule from './modules/search'
import showModule from './modules/show'

export default new Vuex.Store({
  modules: {
    search: searchModule,
    show: showModule
  }
})

