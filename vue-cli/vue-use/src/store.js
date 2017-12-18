import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var state = {                                   //官方文档里面的modules相当于state
  count:10
};

const mutations = {
  increment(state){                            //处理状态（数据）变化
      state.count++;
  },
  decrement(state){
      state.count--;
  }
};

const actions = {
  increment: ({commit}) => {           //传递很多对象中的一个commit对象,处理你要干什么，例如异步请求，判断，流程控制
    // console.log(commit);
    commit('increment')               //传递给mutatiosn中的increment函数
  },
  decrement:({commit}) => {
    commit('decrement')
},
  clickOdd:({commit,state}) => {            //state作为第二个参数，就是上面定义的state
    // commit('clickOdd')
    // alert(state.count)
    if(state.count%2 == 0) {               //只有当state.count为偶数时才提交commit
      commit('increment')
    }
  },
  clickAsync:({commit}) => {
    new Promise((resolve) =>{               //es6中的异步，一秒钟后
      setTimeout(function(){
          // alert(1)
          commit('increment');
          resolve();
      },1000)
    })
  }


};

const getters = {                     //通过这里导出state.count ,然后app.uve那边再去获取
  count(state){
    return state.count
  },
  isOdd(state) {
    return state.count%2 == 0 ? '偶数' : '奇数'
  }
};


export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
});
