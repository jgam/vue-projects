import Vue from 'vue';
import VueRouter from 'vue-router';

//componenets
import AskView from '../views/AskView';
import JobsView from '../views/JobsView';
import NewsView from '../views/NewsView';
import UserView from '../views/UserView';
import QuestionView from '../views/QuestionView';

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
    },
    {
      path: '/news/:id',
      component: UserView,
    },
    {
      path: '/ask',
      component: AskView,
    },
    {
      path: '/jobs',
      component: JobsView,
    },
    {
      path: '/item/:id',
      component: QuestionView,
    },
  ],
});

export default router;
