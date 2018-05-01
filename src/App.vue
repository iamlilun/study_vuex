<template>
  <div>
    <h1>{{count}}</h1>
    <!--<button @click="addCount">Add</button>--> <!--methods用1時,直接呼叫addCount-->
    <!-- <button @click="add(2)">Add</button> --> <!--methods用2時,直接@click物件的key-->
    <button @click="addCount(2)">Add</button> <!--methods用3時,可以帶參數設定Payload-->
  </div>
</template>

<script>

import {mapState, mapGetters} from 'vuex';

export default {
    computed: {
        ...mapState(['todos']),

        //取得item還沒done的數量..如果其它組件都要用到..就把他提煉到store的getters
        // itemsNotDone(){
        //   return this.todos.filter(item => item.done).length;
        // },
        ...mapGetters(['itemsNotDone', 'itemsWithID']),
    },
    methods: { //直接呼叫
        test(){
           this.itemsWithID(2);
        }
    }

}
</script>

<style>
</style>
