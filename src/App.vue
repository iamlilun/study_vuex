<template>
  <div>
    <h1>{{storeCount}}</h1>
    <button @click="addCount">Add</button>
  </div>
</template>

<script>

import {mapState, mapMutations} from 'vuex';

export default {
    data(){
        return {
            localCount: 0,
        }
    },
    //用computed取得state..不是用data
    computed: {
        //
        myCount(){
            return this.localCount;
        },

        //...語法必須有babel打包才能用
        //第一種用法..array
        // ...mapState([
        //     'count',
        //     'username',
        //     'list',
        // ]),

        //第二種用法object
        ...mapState({
           //storeCount: 'count' //key:value用法..storeCount是自己命的名..count是state裡的屬性

          // storeCount(state){ //function用法..用state當參數..回傳state裡的count
          //     return state.count
          // }

          //因為沒用到this..所以用箭頭函式..只有一個參數省去小括號..直接return省去大括號..最終進化形
          storeCount:state => state.count,

          totalCount(state){ //用到this..就不能用箭頭函式
              return this.localCount + state.count;
          },
        }),
    },
    methods: {
        ...mapMutations(['addCount']),

    },
}
</script>

<style>
</style>
