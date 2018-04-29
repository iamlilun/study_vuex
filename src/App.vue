<template>
  <div>
    <h1>{{count}}</h1>
    <button @click="addCount">Add</button>
  </div>
</template>

<script>
export default {
    computed:{
        count(){
            return this.$store.state.count; //取得vuex：state裡的count值
        },
    },
    methods:{
        addCount(){
            this.$store.commit('addCount'); //用commit來執行vuex：mutations下addCount()..
        }
    }
}
</script>

<style>
</style>
