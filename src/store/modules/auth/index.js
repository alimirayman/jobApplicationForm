import axios from 'axios'
import { LOGIN } from '../../../api'

const state = {
  user: {
    name: '',
    password: '',
    token: ''
  }
}

const getters = {
  token: state => state.user.token,
  loginData (state) {
    let data = {}
    data.email = state.user.name
    data.password = state.user.password
  }
}

const mutations = {
  login (state, payload) {
    state.user.token = payload.token
    localStorage.setItem('token', payload.token)
  }
}

const actions = {
  async LOGIN ({commit}, payload) {
    try {
      let { data } = await axios.post(LOGIN, payload)
      commit('login', data)
    } catch (err) {
      console.log(err)
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
