import Vue from 'vue'
import Router from 'vue-router'
import Login from "@/components/Login";
import RegisterStudent from "@/components/RegisterStudent";
import RegisterCompany from "@/components/RegisterCompany";

Vue.use(Router)
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/Login',
            name: 'login',
            component: Login
        },
        {
            path: '/RegisterStudent',
            name: 'registerStudent',
            component: RegisterStudent
        },
        {
            path: '/RegisterCompany',
            name: 'registerCompany',
            component: RegisterCompany
        },

    ]
})
