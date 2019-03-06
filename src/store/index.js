import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';
import getters from './getters';

import registration from './modules/registration';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {
    test: 1
  },

  actions,

  mutations,

  getters,

  modules: {
    registration,
  },

  strict: debug,
})
