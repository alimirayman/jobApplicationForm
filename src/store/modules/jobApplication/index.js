import actions from './actions'

const state = {
  data: {
    name: '',
    email: '',
    contact_number: ''
  },
  cv_link: '',
  apply_for: [
    {
      name: 'Front End Developer',
      check: false
    },
    {
      name: 'UX/UI Designer',
      check: false
    }
  ],
  portfolio: [
    {
      link: '',
      year: 2018,
      skills_used: ''
    }
  ],
  previous_jobs: []
}
const getters = {
  applicant (state) {
    let data = state.data
    data.cv_link = state.cv_link
    data.portfolio = state.portfolio
    data.previous_jobs = state.previous_jobs
    data.apply_for = state.applyFor
    return data
  },
  data: state => state.data,
  applyFor: state => state.apply_for,
  previous_jobs: state => state.previous_jobs
}
const mutations = {
  saveData (state, payload) {
    state.data.name = payload.name
    state.data.email = payload.email
    state.data.contact_number = payload.contact_number
  },
  saveCV (state, payload) {
    state.cv_link = payload.cv_link
  },
  saveExperience (state, payload) {
    state.previous_jobs = payload
  },
  savePortfolio (state, payload) {
    state.portfolio = payload
  },
  saveApplyFor (state, payload) {
    state.apply_for = payload
  }
}

const module = {
  state,
  getters,
  mutations,
  actions
}

export default module
