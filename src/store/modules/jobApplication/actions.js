import axios from 'axios'
import { APPLICANT } from '../../../api'

const actions = {
  async APPLY ({ getters }) {
    let { data } = await axios.post(APPLICANT, getters.applicant)
    console.log(data)
  },
  SAVE_DATA ({commit}, payload) {
    commit('saveData', payload)
  },
  SAVE_APPLY_FOR ({commit}, payload) {
    commit('saveApplyFor', payload)
  },
  SAVE_PORTFOLIO ({ commit }, payload) {
    commit('savePortfolio', payload)
  },
  SAVE_EXPERIENCE ({ commit }, payload) {
    commit('saveExperience', payload)
  },
  SAVE_CV ({ commit }, payload) {
    commit('saveCV', payload)
  }
}

export default actions
