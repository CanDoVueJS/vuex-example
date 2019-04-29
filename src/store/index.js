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
  }
});

