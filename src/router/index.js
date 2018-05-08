import Vue from 'vue'
import Router from 'vue-router'

// 路由页面
const Login = () => import(/* webpackChunkName: "group-login" */ '@/pages/login/index')
const Home = () => import(/* webpackChunkName: "group-home" */ '@/pages/home/root')

// 面板模块
const DashboardAnalysis = () => import(/* webpackChunkName: "group-dashboard" */ '@/pages/home/dashboard/analysis')
const DashboardMonitor = () => import(/* webpackChunkName: "group-dashboard" */ '@/pages/home/dashboard/monitor')
const DashboardWorkplace = () => import(/* webpackChunkName: "group-dashboard" */ '@/pages/home/dashboard/workplace')

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
      component: Home,
      children: [
        { path: '', component: DashboardAnalysis },
        { path: 'dashboard/analysis', name: '分析页', component: DashboardAnalysis },
        { path: 'dashboard/monitor', name: '监控页', component: DashboardMonitor },
        { path: 'dashboard/workplace', name: '工作台', component: DashboardWorkplace }
      ]
    }
  ]
})
