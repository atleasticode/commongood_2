import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Donors from './views/Donors.vue';
import Donees from './views/Donees.vue';
import Buckets from './views/Buckets.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/donors',
      name: 'donors',
      component: Donors,
    },
    {
      path: '/donees',
      name: 'donees',
      component: Donees,
    },
    {
      path: '/buckets',
      name: 'buckets',
      component: Buckets,
    },
  ],
});
