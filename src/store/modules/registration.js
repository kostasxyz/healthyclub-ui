// initial state
const state = {
  step: 19,
  name: '',
  birthYear: 2000,
  gender: 1,
  height: null,
  weight: null,
  activity: 1.2,
  smoker: 0,
  allergies: [],
  dietType: 'omnivore',
  carbType: 'all_carb',
  situationals: [],
  pregnant: 0,
  meals: ['breakfast', 'lunch', 'dinner'],
  sameLunchDinner: 0,
  email: '',
}

// actions
const actions = {
  setData({commit}, payload) {
    console.log(payload)
    commit('SET_DATA', payload)
  },

  setRegStep({commit}, payload) {
    commit('SET_REG_STEP', payload)
  }
}

// mutations
const mutations = {
  SET_DATA(state, payload) {
    state[payload.key] = payload.val;
  },

  SET_REG_STEP(state, payload) {
    state.step = payload;
  },
}

// getters
const getters = {}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
}
