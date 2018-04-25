import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import searchModule from './modules/search'

export default new Vuex.Store({
  modules: {
    search: searchModule
  }
})

