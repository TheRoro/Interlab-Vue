import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        { path: "/", name: "login", component: () => import("./components/Login")},
        { path: "/registerCompany", name: "registerCompany", component: () => import("./components/RegisterCompany")},
        { path: "/registerStudent", name: "registerStudent", component: () => import("./components/RegisterStudent")},
        { path: "/companyDashboard", name: "companyDashboard", component: () => import("./components/CompanyDashboard")},
        { path: "/studentDashboard", name: "studentDashboard", component: () => import("./components/StudentDashboard")},
        { path: "/createCompany", name: "createCompany", component: () => import("./components/CreateCompany")},
    ]
});
