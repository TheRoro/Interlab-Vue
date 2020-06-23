import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        { path: "/", alias: "/login", name: "login", component: () => import("./components/Login") },
        { path: "/registerCompany", name: "registerCompany", component: () => import("./components/RegisterCompany")},
        { path: "/registerStudent", name: "registerStudent", component: () => import("./components/RegisterStudent")},
        { path: "/companyDashboard", name: "companyDashboard", component: () => import("./components/CompanyDashboard") }
    ]
});
