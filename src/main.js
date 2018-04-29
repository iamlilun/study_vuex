import Vue from 'vue'
import App from './App.vue'
import store from './store';

new Vue({
  store, //直接引入vue..下面的component都能使用this.$store
  el: '#app',
  render: h => h(App)
})
