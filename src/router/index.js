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
        meta:{title:'首页'},
        redirect: '/s1',
        children:[
            {
                path:'s1',
                name:'home',
                component: () => import('@/components/HelloWorld'),
                meta: {
                    title:'首页'
                }
            }
        ]
    },
    {
        path: '/fxd',
        component: Layout,
        redirect:'/fxd/s1',
        name:'fxd',
        meta:{title:'风险点'},
        children:[
            {
                path:'s1',
                name:'fxds1',
                component: ()=>import('@/components/HelloWorld'),
                meta: {
                    title:'s1'
                }
            },
            {
                path:'s2',
                name:'fxds2',
                component: ()=>import('@/components/HelloWorld'),
                meta: {
                    title:'s2'
                }
            },
            {
                path:'s3',
                name:'fxds3',
                component: ()=>import('@/components/HelloWorld'),
                meta: {
                    title:'s3'
                }
            }
        ]
    },
    {
        path: '/t1',
        component: Layout,
        redirect:'/t1/s1',
        name:'t1',
        meta:{title:'item1'},
        children:[
            {
                path:'s1',
                name:'t1s1',
                component: ()=>import('@/components/HelloWorld'),
                meta: {
                    title:'s1'
                }
            },
            {
                path:'s2',
                name:'t1s2',
                component: ()=>import('@/components/HelloWorld'),
                meta: {
                    title:'s2'
                }
            },
            {
                path:'s3',
                name:'t1s3',
                component: ()=>import('@/components/HelloWorld'),
                meta: {
                    title:'s3'
                }
            }
        ]
    },
    {
        path: '/t2',
        component: Layout,
        redirect:'/t2/s1',
        name:'t2',
        meta:{title:'t2'},
        children:[
            {
                path:'s1',
                name:'t2s1',
                component: ()=>import('@/components/HelloWorld'),
                meta: {
                    title:'s1'
                }
            },
            {
                path:'s2',
                name:'t2s2',
                component: ()=>import('@/components/HelloWorld'),
                meta: {
                    title:'s2'
                }
            },
            {
                path:'s3',
                name:'t2s3',
                component: ()=>import('@/components/HelloWorld'),
                meta: {
                    title:'s3'
                }
            }
        ]
    },
    {
        path: '/t3',
        component: Layout,
        redirect:'/t3/s1',
        name:'t3',
        meta:{title:'t3'},
        children:[
            {
                path:'s1',
                name:'t3s1',
                component: ()=>import('@/components/HelloWorld'),
                meta: {
                    title:'s1'
                }
            },
            {
                path:'s2',
                name:'t3s2',
                component: ()=>import('@/components/HelloWorld'),
                meta: {
                    title:'s2'
                }
            },
            {
                path:'s3',
                name:'t3s3',
                component: ()=>import('@/components/HelloWorld'),
                meta: {
                    title:'s3'
                }
            }
        ]
    },
    {
        path: '/t4',
        component: Layout,
        redirect:'/t4/s1',
        name:'t4',
        meta:{title:'t4'},
        children:[
            {
                path:'s1',
                name:'t4s1',
                component: ()=>import('@/components/HelloWorld'),
                meta: {
                    title:'s1'
                }
            },
            {
                path:'s2',
                name:'t4s2',
                component: ()=>import('@/components/HelloWorld'),
                meta: {
                    title:'s2'
                }
            },
            {
                path:'s3',
                name:'t4s3',
                component: ()=>import('@/components/HelloWorld'),
                meta: {
                    title:'s3'
                }
            }
        ]
    },
    {
        path: '/t5',
        component: Layout,
        redirect:'/t5/s1',
        name:'t5',
        meta:{title:'t5'},
        children:[
            {
                path:'s1',
                name:'t5s1',
                component: ()=>import('@/components/HelloWorld'),
                meta: {
                    title:'s1'
                }
            },
            {
                path:'s2',
                name:'t5s2',
                component: ()=>import('@/components/HelloWorld'),
                meta: {
                    title:'s2'
                }
            },
            {
                path:'s3',
                name:'t5s3',
                component: ()=>import('@/components/HelloWorld'),
                meta: {
                    title:'s3'
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