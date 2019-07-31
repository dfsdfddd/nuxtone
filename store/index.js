import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
Vue.use(Vuex)

const store = () => new Vuex.Store({
  state,
  mutations,
  actions
  // actions:{
  //   async getIP ({ commit }) {
  //     const ip = await this.$axios.$get('/logout')
  //     console.log(ip);
  //     commit('SET_IP', ip)
  //   }
  // }
})

export default store
