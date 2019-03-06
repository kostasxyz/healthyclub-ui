import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "view.home" */ './views/HomeView.vue')
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import(/* webpackChunkName: "view.registration" */ './views/RegistrationView.vue')
    }
  ]
});
