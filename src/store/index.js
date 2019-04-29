import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 2
  },
  getters: {
    add: state => {
      return state.count + state.count;
    },
    multiply: (state, getters) => {
      return getters.add * state.count;
    }
  },
  mutations: {
    INCREMENT (state, payload) {
      state.count = state.count + payload;
    },
    DECREMENT (state, payload) {
      state.count = state.count - payload.count;
    }
  }
});

