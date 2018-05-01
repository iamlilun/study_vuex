import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: { //存放狀態,最好把要用到的狀態都預先設定好,即便是空值也沒關係
        count: 0,
        username: '',
        list: [],
    },
    mutations: { //設定mutations
        addCount(state){
            state.count += 1;
            Vue.set(state, 'loading', false); //一開始沒在state設定..就要用Vue.set來設定
        },
    },
});

export default store;