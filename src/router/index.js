

import VueRouter from 'vue-router';

const Index  = () => import('../components/Index.vue');
const Hello = () => import( '../components/Hello.vue');
const List = () => import( '../components/List.vue');


const routes = [
  { path: '/', alias:'/index', component: Index },
  { path: '/hello', component: Hello },
  { path: '/list', component: List }
];

const router = new VueRouter({ routes });

export default router;
