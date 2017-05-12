// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import alllist from '@/components/alllist/alllist';
import detial from 'components/detial/detial';
import onelist from 'components/onelist/onelist';
import 'common/stylus/index.styl';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueResource);

let app = Vue.extend(App);

const routes = [
  { path: '/alllist', component: alllist },
  { path: '/detial', component: detial },
  { path: '/onelist', component: onelist }
];

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
});

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(app)
}).$mount('#app');

router.push('./alllist');
