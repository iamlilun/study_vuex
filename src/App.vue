<template>
  <div>
    <h1>{{count}}</h1>
    <!--<button @click="addCount">Add</button>--> <!--methods用1時,直接呼叫addCount-->
    <!-- <button @click="add(2)">Add</button> --> <!--methods用2時,直接@click物件的key-->
    <button @click="addCount(2)">Add</button> <!--methods用3時,可以帶參數設定Payload-->
  </div>
</template>

<script>

import {mapState, mapMutations} from 'vuex';

export default {
    computed: mapState(['count']),

    //用methods呼叫mutations commit變化

    //1.原始方式..function
    //methods: {
        //addCount(){
        //第一種用法..函式
          //this.$store.commit('addCount', 2); //第一個參數為store裡mutations的function, 第二個參數可自訂

          //第二種用法..物件
          // this.$store.commit({
          //     type: 'addCount', //type必須是mutations的function
          //     step: 2, //其它屬性隨你命名跟賦值
          // });
        //}
    //},

    //2.沒有要寫其它methods時..就直接用mapMutations包物件
    // methods: mapMutations({
    //     add: 'addCount', //key可隨意取.value必須是mutations的function
    // })

    //3.有要寫其它methods時..就用...mapMutations包陣列
    methods: {
        ...mapMutations(['addCount']), //直接用mapMutations
    },


}
</script>

<style>
</style>
