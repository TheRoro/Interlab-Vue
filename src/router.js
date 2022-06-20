import Vue from 'vue';
import Router from 'vue-router';
import {store} from './store';
import api from './api';

Vue.use(Router);

const router = new Router({
    routes: [
        { path: "/", name: "login", component: () => import("./components/Login")},
        { path: "/registerCompany", name: "registerCompany", component: () => import("./components/RegisterCompany")},
        { path: "/registerStudent", name: "registerStudent", component: () => import("./components/RegisterStudent")},
        { path: "/companyDashboard", name: "companyDashboard", component: () => import("./components/CompanyDashboard"), meta: { requiresAuth: true, role: "company" }},
        { path: "/studentDashboard", name: "studentDashboard", component: () => import("./components/StudentDashboard"), meta: { requiresAuth: true, role: "student" }},
        { path: "/createCompany", name: "createCompany", component: () => import("./components/CreateCompany"), meta: { requiresAuth: true, role: "company" }},
    ]
});

router.beforeEach(async (to, from, next) => {
    if (!to.meta.requiresAuth) {
        next();
        return;
    }

    if (!store.state.sessionChecked) {
        try {
            const response = await api.get('/api/auth/session');
            store.commit('saveSession', response.data.user);
        } catch (error) {
            store.commit('clearSession');
        }
    }

    if (!store.state.authenticated || (to.meta.role && store.state.role !== to.meta.role)) {
        next({name: "login"});
        return;
    }

    next();
});

export default router;
