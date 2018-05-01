import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0,
        editor:{
            text: '',
        }
    },

    //mutations是唯一可以改變state的方法，只能做同步的操作
    mutations : {
        addCount(state, payload){ //callback..原型為addCount:function(state)..但屬性等於函式時，可以省略function字眼
            state.count += payload; //函式用法或mapMutations時..直接用payload
            //state.count += payload.step; //物件用法就是payload.step

            //沒設定state時要用Vue.set來設定
            //Vue.set(state.editor, 'loading', true);
            //state.editor = {...state.editor, loading:true}; //es6語法也行..不太懂意思就是.要回頭補點基本功.
        },
    },
});

export default store;