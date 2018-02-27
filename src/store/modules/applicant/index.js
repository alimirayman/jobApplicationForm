import http from 'axios'
import { APPLICANT } from '../../../api'

http.interceptors.request.use(config => {
  config.headers.authorization = 'Bearer ' + localStorage.getItem('token')
  return config
}, error => {
  return Promise.reject(error)
})

const state = {
  applicants: []
}
const getters = {
  applicants: state => state.applicants,
  getApplicant (state) {
    return (applicantID) => {
      return state.applicants.find((applicant) => {
        return parseInt(applicantID) === applicant.applied_for[0].applicant_id
      })
    }
  }
}
const mutations = {
  saveApplicant (state, payload) {
    state.applicants = payload
  }
}
const actions = {
  async GET_APPLICANT ({commit}) {
    try {
      let { data } = await http.get(APPLICANT)
      commit('saveApplicant', data)
    } catch (err) {
      console.log(err)
      commit('logout')
    }
  },
  async DELETE_APPLICANT ({ commit }, payload) {
    try {
      let { data } = await http.delete(APPLICANT + '/' + payload.id)
      console.log(data)
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
