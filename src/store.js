import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        todos:[],
    },
    mutations : {
        addCount(state, payload){
            state.count += payload;
        },
    },
    getters:{ //等於store的computed
        itemsNotDone(state){ //吃state做為參數
          return state.todos.filter(item => item.done).length;
        },
        itemsDone(state, getters){ //在第二個參數注入getters...也可以呼叫自己的function
            return state.todos.length - getters.itemsNotDone;
        },
        // itemsWithID(state){ //也可以再包一層function..吃傳進來的參數
        //     return (id) => {
        //         return state.todos.filter(item => item.id === id);
        //     }
        // }
        itemsWithID: state => //最終進化型
                id => state.todos.filter(item => item.id === id),

    },
});

export default store;