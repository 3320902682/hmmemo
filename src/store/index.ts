//导入 vuex 和 vue
import Vuex from 'vuex';
import Vue from 'vue';
import ActionHelper from './ActionHelper';

//注册 vuex 到 vue
Vue.use(Vuex);

//创建 vuex仓库
let store = new Vuex.Store({
  state: {
    aHelper: new ActionHelper()
  },
  mutations: {

  }
})
//导出 仓库对象 
export default store;