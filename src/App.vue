<template>
  <div>
    <h1>{{count}}</h1>
    <button @click="addCount">Add</button>
  </div>
</template>

<script>
    /**
     * 可以在這import store..下面就不用this.$store..但不推薦..
     * 因為變成每個component都要import..不如就在main引入..下層都能用this.$store
     */
//import store from './store';
import {mapState, mapMutations} from 'vuex';

export default {
    //用工且可以把所有state跟mutations塞進array,不然一個功能一個函式太累
    computed: {
        ...mapState(['count']), //es6語法..把這物件灑出來(@@啥東東?)
        //這裡可以寫其它的computed
    },
    methods: {
        ...mapMutations(['addCount']),
        //這裡可以寫其它的methods
    },
}
</script>

<style>
</style>
