import Vue from 'vue';
import VueRouter from 'vue-router';

//componenets
// import AskView from '../views/AskView';
import JobsView from '../views/JobsView';
// import NewsView from '../views/NewsView';
import UserView from '../views/UserView';
import QuestionView from '../views/QuestionView';
import createListView from '../views/CreateListView';

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
      component: createListView('NewsView'),
      name: 'news',
    },
    {
      path: '/news/:id',
      component: UserView,
    },
    {
      path: '/ask',
      component: createListView('AskView'),
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
