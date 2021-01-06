const getters = {
  news(state) {
    return state.news;
  },
  asks(state) {
    return state.asks;
  },
  jobs(state) {
    return state.jobs;
  },
  fetchedQuestion(state) {
    return state.question;
  },
};
export default getters;
