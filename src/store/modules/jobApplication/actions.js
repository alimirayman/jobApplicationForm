import axios from 'axios'
import { APPLICANT } from '../../../api'
import { Message } from 'element-ui'

const actions = {
  async APPLY ({ getters, commit }) {
    try {
      let { data } = await axios.post(APPLICANT, getters.applicant)
      console.log(data)
      commit('nextStep')
      Message.success({
        message: 'Congrats, Your Application has been submitted. Check your email for confirmation. You might need to check your spam email',
        duration: 5000,
        showClose: true
      })
      setTimeout(() => {
        commit('resetStep')
        commit('resetApplicant')
      }, 5000)
    } catch (err) {
      Message.error({
        message: 'Error Occured!! Please fill the form properly and submit the form again',
        showClose: true
      })
    }
  },
  SAVE_DATA ({commit}, payload) {
    if (!(payload.name === '' || typeof payload.name === 'undefined') &&
        !(payload.email === '' || typeof payload.email === 'undefined') &&
        !(payload.contact_number === '' || typeof payload.contact_number === 'undefined')) {
      console.log(payload)
      commit('saveData', payload)
      commit('nextStep')
    }
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
