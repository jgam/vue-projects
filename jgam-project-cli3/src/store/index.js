import Vuex from 'vuex';
import Vue from 'vue';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    asks: [],
    jobs: [],
    user: {},
    question: {},
  },
  mutations,
  actions,
  getters,
});
