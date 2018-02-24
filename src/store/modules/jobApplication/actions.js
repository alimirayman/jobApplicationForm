import axios from 'axios'
import { APPLICANT } from '../../../api'
import { Message } from 'element-ui'

const actions = {
  async APPLY ({ getters, commit }) {
    let data = await axios.post(APPLICANT, getters.applicant)
    console.log(data)
    commit('nextStep')
    Message.success({
      message: 'Congrats, Your Application has been submitted.'
    })
    setTimeout(() => {
      commit('resetStep')
      commit('resetApplicant')
    }, 2000)
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
