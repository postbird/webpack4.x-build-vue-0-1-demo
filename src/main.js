import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import './main.css';

import router from './router';

Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  render: (c) => {return c(App)}
});