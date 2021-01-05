import { fetchList } from '../api/index';

const actions = {
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
};
export default actions;
