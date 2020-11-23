/*
 * @Descripttion: 
 * @version: 
 * @Author: zml
 * @Date: 2020-11-16 14:59:06
 * @LastEditors: zml
 * @LastEditTime: 2020-11-23 10:08:15
 */
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import Layout from '../components/layout/index.tsx'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    children:[
      {
        path: '/home',
        name: '首页',
        meta: {
          i18n: 'home'
        },
        component: () =>
          import( /* webpackChunkName: "views" */ '../views/home/index.tsx')
      }
    ]
    // component: import('../views/Home'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About'),
  },
  {
    path: '/user',
    name: 'User',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/user/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
