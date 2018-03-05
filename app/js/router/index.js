import Vue from "vue"
import Router from "vue-router"
import mine from '../components/mine/mine'
import manage from '../components/manage/manage'
import index from '../components/index/index'
import crowdFunding from '../components/crowd-funding/crowd-funding'
import blankNote from '../components/blank-note/blank-note'

import "../../css/reset.scss"
Vue.use(Router)

export default new Router({
    linkActiveClass:"active",
    routes: [
        {
            path: "/",
            redirect:"/index"
        },
        {
            path:'/index',
            component:index
        },
        {
            path:'/manage',
            component:manage
        },
        {
            path:'/blank-note',
            component:blankNote
        },
        {
            path:'/crowd-funding',
            component:crowdFunding
        },
        {
            path:'/mine',
            component:mine
        }
        
    ],
})
