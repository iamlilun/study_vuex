import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//可以劃分module..每個module有自己的store method
const todos = {
    namespaced: true, //不想跟其它模組actions method衝突時..可以加上namespaced的屬性

    state: {
        list: [],
    },
    mutations:{
        setList(state, payload){

        }
    },
    getters:{
        getLength(state, getters, rootState, rootGetters){
            return rootState.member.username; //要取得別的module下的state要透過rootState參數
        },
    },
    actions:{
        fetchList(context){ //跟member的actions名字相同..所以app mounted時兩個都會執行

            //沒rootCommit跟rootDispatch..類似功能要用第三個參數{root:true}
            const {commit, dispatch, state, getters, rootState, rootGetter} = context;

        }
    }
};

const member = {
    namespaced: true,
    state:{
        username: '',
        rank: 0,
    },
    mutations: {
        setList(){

        }
    },
    actions: {
        fetchList({commit}){
            commit('todos/setList', [1,2,3,4], {root: true}); //commit別的module的mutations時..要加{root:true}
            commit('setList', [1,2,3,4]); //commit自己的mutations
        }
    }
};

const store = new Vuex.Store({
   modules:{ //注入module
       todos: todos,
       member: member,
   }
});

export default store;