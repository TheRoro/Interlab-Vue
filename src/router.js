import { createRouter, createWebHashHistory } from 'vue-router';
import {store} from './store';
import api from './api';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: "/", name: "login", component: () => import("./components/Login.vue")},
        { path: "/registerCompany", name: "registerCompany", component: () => import("./components/RegisterCompany.vue")},
        { path: "/registerStudent", name: "registerStudent", component: () => import("./components/RegisterStudent.vue")},
        { path: "/companyDashboard", name: "companyDashboard", component: () => import("./components/CompanyDashboard.vue"), meta: { requiresAuth: true, role: "company" }},
        { path: "/studentDashboard", name: "studentDashboard", component: () => import("./components/StudentDashboard.vue"), meta: { requiresAuth: true, role: "student" }},
        { path: "/createCompany", name: "createCompany", component: () => import("./components/CreateCompany.vue"), meta: { requiresAuth: true, role: "company" }},
    ]
});

router.beforeEach(async (to) => {
    if (!to.meta.requiresAuth) {
        return true;
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
        return {name: "login"};
    }

    return true;
});

export default router;
