import Vuex from 'vuex';
import Vue from 'vue';
import { fetchList } from '../api/index';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    asks: [],
    jobs: [],
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    },
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    },
    SET_ASKS(state, asks) {
      state.asks = asks;
    },
  },
  actions: {
    FETCH_NEWS(context, { input }) {
      console.log(input);
      fetchList(input).then((response) => {
        if (input == 'news') {
          console.log('got in news');
          //   this.news = response.data;
          context.commit('SET_NEWS', response.data);
        } else if (input == 'ask') {
          //   this.state.asks = response.data;
          context.commit('SET_ASKS', response.data);
        } else if (input == 'jobs') {
          //   this.state.jobs = response.data;
          context.commit('SET_JOBS', response.data);
        } else {
          console.log('false!');
        }
      });
    },
  },
  getters: {
    news(state) {
      return state.news;
    },
  },
});
