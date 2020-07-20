import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { local, session } from './utils/storage.js'
import '@/components' // 引用自定义组件
import api from '@/api' // 导入api接口
import awaitWrap from '@/plugin/awaitWrap' // 自定义全局方法引入
Vue.prototype.$api = api // 将api挂载到vue的原型上
Vue.prototype.local = local
Vue.prototype.session = session
Vue.use(awaitWrap) // 全局方法添加
Vue.config.productionTip = false // 阻止启动生产消息

document.title = '我是官网'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
