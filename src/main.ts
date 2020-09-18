import Vue from 'vue'
import App from './App.vue'
import Category from './model/CateEnum'
import ItemData from './model/ItemData'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

let item1 = new ItemData(1, Category.Study, '来一起学TypeScript吧', '大家一起快乐的学习把~~');
console.log(item1);
