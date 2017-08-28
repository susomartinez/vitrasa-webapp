import Vue from 'vue';
import Router from 'vue-router';
import VueResource from 'vue-resource';
import Home from '@/components/Home';
import Stop from '@/components/Stop';

Vue.use(Router);
Vue.use(VueResource);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/stop/:id',
      name: 'Stop',
      component: Stop,
    },
  ],
});
