import Vue from 'vue'
import Router from 'vue-router'

// 路由页面
const Login = () => import(/* webpackChunkName: "group-login" */ '@/pages/login/index')
const Home = () => import(/* webpackChunkName: "group-login" */ '@/pages/home/root')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '登录页',
      component: Login
    },
    {
      path: '/home',
      name: '主页',
      component: Home
    }
  ]
})
