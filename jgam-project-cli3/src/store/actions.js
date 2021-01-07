import { fetchList, fetchQuestion, fetchUser, fetchListt } from '../api/index';

const actions = {
  FETCH_NEWS(context, { input }) {
    console.log(input);
    fetchList(input).then((response) => {
      if (input == 'news') {
        console.log('got in news');
        //   this.news = response.data;
        context.commit('SET_NEWS', response.data);
        return response;
      } else if (input == 'ask') {
        //   this.state.asks = response.data;
        context.commit('SET_ASKS', response.data);
        return response;
      } else if (input == 'jobs') {
        //   this.state.jobs = response.data;
        context.commit('SET_JOBS', response.data);
        return response;
      } else {
        console.log('false!');
        return response;
      }
    });
  },
  FETCH_USER(context, { input }) {
    return fetchUser(input)
      .then((response) => context.commit('SET_USER', response.data))
      .catch((err) => console.log(err));
  },
  FETCH_QUESTION(context, { id }) {
    return fetchQuestion(id)
      .then((response) => context.commit('SET_QUESTION', response.data))
      .catch((err) => console.log(err));
  },
  async FETCH_LIST({ commit }, pageName) {
    const response = await fetchListt(pageName);

    commit('SET_LIST', response.data);
    return response;
  },
};
export default actions;
