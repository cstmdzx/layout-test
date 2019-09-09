import Vue from 'vue'
import Router from 'vue-router'

import Layout from '../views/layout/layout'
Vue.use(Router)

export const constantRouterMap = [
    {
        path:'/404',
        component: () => import ('../views/404')
    },
    {
        path:'',
        component: Layout,
        meta:{title:'首页'}
    },
    {
        path: '/fxd',
        component: Layout,
        meta:{title:'风险点'}
    },
    {
        path: '*',
        redirect: '/404' 
    }
]

export default new Router({
    routes: constantRouterMap
})