import Vue from 'vue'
import Vuex from 'vuex'

// Module imports
import application from './modules/jobApplication'
import auth from './modules/auth'

Vue.use(Vuex)

const state = {
  step: 0
}
const getters = {
  step: state => state.step
}
const mutations = {
  nextStep (state) {
    if (++state.step > 4) state.step = 4
  },
  prevStep (state) {
    if (--state.step < 0) state.step = 0
  },
  resetStep (state) {
    state.step = 0
  }
}
const actions = {
  NEXT_STEP ({commit}) {
    commit('nextStep')
  },
  PREV_STEP ({ commit }) {
    commit('prevStep')
  }
}
const modules = {
  application,
  auth
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules
})

export default store
