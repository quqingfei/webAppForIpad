// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import axios from 'axios';
import vuescroll from 'vue-scroll';
import App from './App';
import alllist from '@/components/alllist/alllist';
import detial from 'components/detial/detial';
import onelist from 'components/onelist/onelist';
import 'common/stylus/index.styl';

Vue.config.productionTip = false;
Vue.prototype.$ajax = axios;
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(vuescroll);

let app = Vue.extend(App);

const routes = [
  {
    path: '/',
    redirect: '/alllist'
  },
  { path: '/alllist', name: 'alllist', component: alllist },
  { path: '/detial', name: 'detial', component: detial },
  { path: '/onelist', name: 'onelist', component: onelist }
];

const store = new Vuex.Store({
  state: {
    oneText: '',
    userData: {
      type: Object
    }
  },
  mutations: {
    showOne(state, data) {
      state.oneText = data;
    },
    setUser(state, data) {
      state.userData = data;
    }
  }
});

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
});
/* add yyyy-MM-dd hh:mm:ss filter */
Vue.filter('times', function(time) {
  if(typeof (time) === 'undefined'){
    return ``;
  };
  let date = new Date(time);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  month = month >= 10 ? month : '0' + month;
  day = day >= 10 ? day : '0' + day;
  hour = hour >= 10 ? hour : '0' + hour;
  minute = minute >= 10 ? minute : '0' + minute;
  second = second >= 10 ? second : '0' + second;
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
});
Vue.filter('timesMMdd', function(time) {
  if(typeof (time) === 'undefined'){
    return ``;
  };
  let date = new Date(time);
  let month = date.getMonth() + 1;
  let day = date.getDate();
  month = month >= 10 ? month : '0' + month;
  day = day >= 10 ? day : '0' + day;
  return `${month}/${day}`;
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(app)
});

/* Disable dropped file from opening in window
https://github.com/electron/electron/issues/908
document.addEventListener('drop', function(e) {
  e.preventDefault();
  e.stopPropagation();
});
document.addEventListener('dragover', function(e) {
  e.preventDefault();
  e.stopPropagation();
});
Disable context menu */
/* document.addEventListener('contextmenu', event => {
  event.preventDefault();
  event.stopPropagation();
}); */
/* Disable double click selection */
/* document.addEventListener('mousedown', e => {
  e.preventDefault();
}); */
