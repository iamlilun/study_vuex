<template>
</template>

<script>
import {mapState} from 'vuex';

export default {
  mounted: {
      //this.$store.dispatch('fetchList'); //功能同時存在兩個模組..所兩個都會執行
      //this.$store.dispatch('todos/fetchList'); //module的namespaced設為ture時，就可以用/劃分只執行todos下的fetchList

      ...mapState('todos', [ //第一個參數為namespace
          'list',
          'text',
          'input',
          'current',
          'loading',
      ]),
      ...mapState('member', [
          'username',
          'ranking',
      ]),
  }
}
</script>

<style>
</style>
