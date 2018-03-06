import Vue from 'vue'
import Router from 'vue-router'

/* Layout */
import Layout from '../views/layout/Layout';

/* passport */
const login = resolve => require(['../views/passport/login'], resolve);
const register = resolve => require(['../views/passport/register'], resolve);
/* index */
const home = resolve => require(['../views/home/index'], resolve);

const uddd = resolve => require(['../views/uddd/index'], resolve);
/* error page */
const Err404 = resolve => require(['../views/error/404'], resolve);

Vue.use(Router)

export const constantRouterMap = [
    { path: '/login', component: login, meta: {title: '登录'}, hidden: true },
    { path: '/register', component: register, meta: {title: '注册'}, hidden: true },
    { path: '/404', component: Err404, meta: {title: '404'}, hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    name: '首页',
    hidden: true,
    children: [{ path: 'home', meta: {title: '首页'}, component: home }]
  },
  {
    path: '/uddd',
    component: Layout,
    redirect: '/uddd/index',
    name: '测试',
    hidden: true,
    children: [{ path: 'index', component: uddd }]
  },
  { path: '*', redirect: '/404', hidden: true }
]
export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});

