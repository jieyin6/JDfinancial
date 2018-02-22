import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import financial from "../financial/financial.vue"
import "../../css/reset.scss"
Vue.use(Router)

export default new Router({
    linkActiveClass:"active",
    routes: [
        {
            path: "/",
            redirect:"/home"
        },
        {
            path:"/financial",
            name:"financial",
            component: financial 
        },
        {
            path: "/home",
            name: "Home",
            component: Home,
        }
    ],
})
