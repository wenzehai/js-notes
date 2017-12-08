import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'

export default new Vuex.Store({
  actions,
  modules:{   //mutations是一个组件，所以要改变格式
    mutations
  }
  // getters
});
