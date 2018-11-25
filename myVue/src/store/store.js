import Vue from 'vue'
import Vuex from 'vuex'
import {
  INCREMENT,
  DECREMENT,
  ACTIONNUM
} from './mutation_types'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    num: 1
  },
  actions: {
    actionnum ({commit}, n) {
      // commit('ACTIONNUM', n)
      setTimeout(() => {
        commit('ACTIONNUM', n)
      }, 1000)
    }
  },
  mutations: {
    // increment: (state, n) => { state.count += n },
    // decrement: (state, obj) => { state.count -= obj.x }
    [INCREMENT] (state, n) { state.count += n },
    [DECREMENT] (state, obj) { state.count -= obj.x },
    [ACTIONNUM] (state, n) { state.num += n }
  },
  getters: {
    counts: state => {
      return state.count * 3
    },
    num: state => state.num
    // counts: (state) => (n) => {
    //   return state.count * n
    // }
  }
})
