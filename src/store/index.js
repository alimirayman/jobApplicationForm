import Vue from 'vue'
import Vuex from 'vuex'

// Module imports
import application from './modules/jobApplication'

Vue.use(Vuex)

const state = {}
const getters = {}
const mutations = {}
const actions = {}
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
