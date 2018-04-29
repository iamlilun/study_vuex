import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: { //設定state
        count: 0,
    },
    mutations: { //設定mutations
        addCount(state){
            state.count += 1;
        },
    },
});

export default store;