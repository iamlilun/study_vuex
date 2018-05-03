<template>
    <div>
        <input type="text" v-model="text" />
        <!--<input type="text" :value="text" @input="setText" />-->
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';
    export default {
        // 1.使用 :value ＋ @input時使用方式
        // 較囉嗦的寫法
        // computed: {
        //     text(){
        //         return this.$store.state.text;
        //     }
        // },
        // methods: {
        //     setText(val){
        //         this.$store.commit('setText', val);
        //     }
        // }
        //----
        // 較不囉嗦的寫法
        // computed:{
        //     ...mapState(['text']),
        // },
        // methods:{
        //     ...mapMutations(['setText']),
        // },

        // 2.使用v-model
        computed: { //將原本的data改用computed並利用get及set操作vuex
            text: {
                get(){
                  return this.$store.state.text;
                },
                set(val){
                  this.$store.commit('setText', val);
                },
            }
        }
    }
</script>

<style>
</style>
