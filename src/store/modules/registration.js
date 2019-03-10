// initial state
const state = {
  step: 20,
  stepDir: 1,
  birthYear: 2000,
  gender: 1,
  height: null,
  weight: null,
  weightGoal: null,
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
  liftFiveKilos: 0,
  crossRoom: 0,
  tenStepStair: 0,
}

// actions
const actions = {
  setData({commit}, payload) {
    console.log('action@setData: ', payload);
    commit('SET_DATA', payload);
  },

  seedState({commit}, payload) {
    commit('SEED_STATE', payload);
  }
}

// mutations
const mutations = {
  SET_DATA(state, payload) {
    state[payload.key] = payload.val;
    console.log('mutation@SET_DATA: ', state);
    window.localStorage.setItem('hc_reg_data', JSON.stringify(state));
  },

  SEED_STATE(state, payload) {
    Object.assign(state, payload);
    console.log('mutation@SEED_STATE: ', state);
  }
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
