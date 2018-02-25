import actions from './actions'

const state = () => {
  return {
    data: {},
    cv: {
      cv_link: ''
    },
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
    portfolio: [],
    previous_jobs: []
  }
}
const getters = {
  applicant (state) {
    let data = {}
    data.name = state.data.name
    data.email = state.data.email
    data.contact_number = state.data.contact_number
    data.cv_link = state.cv.cv_link
    data.portfolio = state.portfolio
    data.previous_jobs = state.previous_jobs
    data.apply_for = state.apply_for
    return data
  },
  data: state => state.data,
  cv: state => state.cv,
  applyFor: state => state.apply_for,
  portfolios: state => state.portfolio,
  previous_jobs: state => state.previous_jobs
}
const mutations = {
  resetApplicant (state) {
    state.data = {}
    state.cv = {cv_link: ''}
    state.portfolio = []
    state.previous_jobs = []
    state.apply_for = [
      {
        name: 'Front End Developer',
        check: false
      },
      {
        name: 'UX/UI Designer',
        check: false
      }
    ]
  },
  saveData (state, payload) {
    state.data.name = payload.name
    state.data.email = payload.email
    state.data.contact_number = payload.contact_number
  },
  saveCV (state, payload) {
    state.cv = payload
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
