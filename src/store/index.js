import Vue from 'vue'
import Vuex from 'vuex'

// Module imports
import application from './modules/jobApplication'

Vue.use(Vuex)

const state = {
  step: 0
}
const getters = {
  step: state => state.step
}
const mutations = {
  nextStep (state) {
    if (++state.step > 3) state.step = 3
  },
  prevStep (state) {
    if (--state.step < 0) state.step = 0
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
  application
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules
})

export default store