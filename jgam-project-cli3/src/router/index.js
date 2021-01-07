import Vue from 'vue';
import VueRouter from 'vue-router';

//componenets
import AskView from '../views/AskView';
import JobsView from '../views/JobsView';
import NewsView from '../views/NewsView';
import UserView from '../views/UserView';
import QuestionView from '../views/QuestionView';
// import createListView from '../views/CreateListView';
import bus from '../utils/bus';
import { store } from '../store/index';

Vue.use(VueRouter);

//vue router object that takes care of routes
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/news',
      component: NewsView,
      name: 'news',
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');

        store
          .dispatch('FETCH_LIST', to.name)
          .then(() => {
            next();
          })
          .catch((err) => {
            console.log(err);
          });
      },
    },
    {
      path: '/news/:id',
      component: UserView,
    },
    {
      path: '/ask',
      //   component: createListView('AskView'),
      component: AskView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');

        store
          .dispatch('FETCH_LIST', to.name)
          .then(() => {
            next();
          })
          .catch((err) => {
            console.log(err);
          });
      },
      name: 'ask',
    },
    {
      path: '/jobs',
      //   component: createListView('JobsView'),
      component: JobsView,
      name: 'jobs',
    },
    {
      path: '/item/:id',
      component: QuestionView,
    },
  ],
});

export default router;
