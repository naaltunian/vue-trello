import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import boards from './modules/boards'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    boards
  }
})
