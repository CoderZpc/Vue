import Vue from 'vue'
import App from './App'
import router from './router'
// 本来应写成：import router from './router/index'，但是router是一个文件夹，如果router后面什么都不写，默认找router下的index.js

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// 在Vue.prototype中定义，全局所有的组件都可以使用
// https://blog.csdn.net/qq_32407233/article/details/83819831
Vue.prototype.test = function () {
  console.log('test');
}
