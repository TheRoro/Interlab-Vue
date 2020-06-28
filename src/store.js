import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        userId : null,
        firstName: null,
    },
    mutations: {
        saveId(state, id){
            this.state.userId=id;
        },
        saveFirstName(state, name){
            this.state.firstName = name;
        }
    }
});
