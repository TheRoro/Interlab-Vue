import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        authenticated: false,
        sessionChecked: false,
        role: null,
        userId : null,
        firstName: null,
        companyId: null,
        internshipId: null,
        internships: [],
    },
    mutations: {
        saveSession(state, session){
            state.authenticated = true;
            state.sessionChecked = true;
            state.role = session.role.toLowerCase();
            state.userId = session.id;
            state.firstName = session.firstName;
            state.companyId = session.companyId || null;
        },
        clearSession(state){
            state.authenticated = false;
            state.sessionChecked = true;
            state.role = null;
            state.userId = null;
            state.firstName = null;
            state.companyId = null;
            state.internshipId = null;
            state.internships = [];
        },
        saveId(state, id){
            state.userId=id;
        },
        saveFirstName(state, name){
            state.firstName = name;
        },
        saveCompanyId(state, id){
            state.companyId = id;
        },
        saveInternshipId(state, id){
            state.internshipId = id;
        },
        saveInternships(state, internships){
            state.internships = internships;
        },
        addInternships(state, internship){
            state.internships.push(internship);
        }
    }
});
