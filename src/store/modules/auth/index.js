import axios from 'axios'
import { LOGIN } from '../../../api'

const state = {
  user: {
    token: ''
  }
}

const getters = {
  token: state => state.user.token
}

const mutations = {
  login (state, payload) {
    state.user.token = payload.token
    localStorage.setItem('token', payload.token)
  },
  logout (state, payload) {
    state.user.token = ''
    localStorage.removeItem('token')
  }
}

const actions = {
  async LOGIN ({commit}, payload) {
    try {
      let { data } = await axios.post(LOGIN, payload)
      commit('login', data)
    } catch (err) {
      console.log(err)
      commit('logout')
    }
  }
}

const module = {
  state,
  getters,
  mutations,
  actions
}

export default module
