import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import axios from 'axios'
import mockjs from './mock.js/mock'

Vue.config.productionTip = false
Vue.prototype.$http=axios

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    components: { App },
    template: "<App/>",
})
/* eslint-enable no-new */
