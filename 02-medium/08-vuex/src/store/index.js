import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import modulesA from './modules/moduleA'

Vue.use(Vuex)

const state = {
  count: 100,
  students: [
    { id: 110, name: 'Zpc', age: 18 },
    { id: 111, name: 'James', age: 23 },
    { id: 112, name: 'Lebron', age: 50 },
    { id: 113, name: 'Tom', age: 39 },
    { id: 114, name: 'Jerry', age: 36 }
  ],
  info: {
    name: 'Lebron', age: 36, height: 2.03
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: modulesA
  }
})

export default store

