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
        meta:{title:'首页', breadcrumb:'首页'},
        redirect: '/s1',
        children:[
            {
                path:'s1',
                name:'sys1',
                component: () => import('@/components/HelloWorld'),
                meta: {
                    title:'首页',
                    breadcrumb:'首页page'
                }
            }
        ]
    },
    {
        path: '/fxd',
        component: Layout,
        redirect:'/fxd/s1',
        meta:{title:'风险点', breadcrumb:'fxd'},
        children:[
            {
                path:'s1',
                name:'fxds1',
                component: ()=>import('@/components/HelloWorld'),
                meta: {
                    title:'s1',
                    breadcrumb:'s1page'
                }
            },
            {
                path:'s2',
                name:'fxds2',
                component: ()=>import('@/components/HelloWorld'),
                meta: {
                    title:'s2',
                    breadcrumb:'s2page'
                }
            },
            {
                path:'s3',
                name:'fxds3',
                component: ()=>import('@/components/HelloWorld'),
                meta: {
                    title:'s3',
                    breadcrumb:'s3page'
                }
            }
        ]
    },
    {
        path: '/t1',
        component: Layout,
        meta:{title:'item1'},
        children:[
            {
                path:'s1',
                name:'t1s1',
                component: ()=>import('@/components/HelloWorld'),
                meta: {
                    title:'s1',
                    breadcrumb:'s1page'
                }
            },
            {
                path:'s2',
                name:'t1s2',
                component: ()=>import('@/components/HelloWorld'),
                meta: {
                    title:'s2',
                    breadcrumb:'s2page'
                }
            },
            {
                path:'s3',
                name:'t1s3',
                component: ()=>import('@/components/HelloWorld'),
                meta: {
                    title:'s3',
                    breadcrumb:'s3page'
                }
            }
        ]
    },
    {
        path: '/t2',
        component: Layout,
        meta:{title:'item1'},
        children:[
            {
                path:'s1',
                name:'t2s1',
                component: ()=>import('@/components/HelloWorld'),
                meta: {
                    title:'s1',
                    breadcrumb:'s1page'
                }
            },
            {
                path:'s2',
                name:'t2s2',
                component: ()=>import('@/components/HelloWorld'),
                meta: {
                    title:'s2',
                    breadcrumb:'s2page'
                }
            },
            {
                path:'s3',
                name:'t2s3',
                component: ()=>import('@/components/HelloWorld'),
                meta: {
                    title:'s3',
                    breadcrumb:'s3page'
                }
            }
        ]
    },
    {
        path: '/t3',
        component: Layout,
        meta:{title:'item1'},
        children:[
            {
                path:'s1',
                name:'t3s1',
                component: ()=>import('@/components/HelloWorld'),
                meta: {
                    title:'s1',
                    breadcrumb:'s1page'
                }
            },
            {
                path:'s2',
                name:'t3s2',
                component: ()=>import('@/components/HelloWorld'),
                meta: {
                    title:'s2',
                    breadcrumb:'s2page'
                }
            },
            {
                path:'s3',
                name:'t3s3',
                component: ()=>import('@/components/HelloWorld'),
                meta: {
                    title:'s3',
                    breadcrumb:'s3page'
                }
            }
        ]
    },
    {
        path: '/t4',
        component: Layout,
        meta:{title:'item1'},
        children:[
            {
                path:'s1',
                name:'t4s1',
                component: ()=>import('@/components/HelloWorld'),
                meta: {
                    title:'s1',
                    breadcrumb:'s1page'
                }
            },
            {
                path:'s2',
                name:'t4s2',
                component: ()=>import('@/components/HelloWorld'),
                meta: {
                    title:'s2',
                    breadcrumb:'s2page'
                }
            },
            {
                path:'s3',
                name:'t4s3',
                component: ()=>import('@/components/HelloWorld'),
                meta: {
                    title:'s3',
                    breadcrumb:'s3page'
                }
            }
        ]
    },
    {
        path: '/t5',
        component: Layout,
        meta:{title:'item1'},
        children:[
            {
                path:'s1',
                name:'t5s1',
                component: ()=>import('@/components/HelloWorld'),
                meta: {
                    title:'s1',
                    breadcrumb:'s1page'
                }
            },
            {
                path:'s2',
                name:'t5s2',
                component: ()=>import('@/components/HelloWorld'),
                meta: {
                    title:'s2',
                    breadcrumb:'s2page'
                }
            },
            {
                path:'s3',
                name:'t5s3',
                component: ()=>import('@/components/HelloWorld'),
                meta: {
                    title:'s3',
                    breadcrumb:'s3page'
                }
            }
        ]
    },
    {
        path: '*',
        redirect: '/404' 
    }
]

export default new Router({
    routes: constantRouterMap
})