import Vue from 'vue'
import App from './App'

import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})

/******************************************全局配置************************************************************/
// axios.defaults.baseURL = 'http://152.136.185.210:8000/api/n3'
// axios.defaults.timeout = 5000

// axios({
//   // httpbin.org/可以做接口测试
//   url: '/home/multidata',
//   // 不写的话默认是get
//   method: 'get'
// }).then(res => {
//   console.log(res);
// })

// axios({
//   // 152.136.185.210:8000/api/n3/home/data?type=sell&page=3
//   url: '/home/data',
//   // 专门针对get的参数拼接
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })

// // 发送并发请求
// axios.all(
//   [
//     axios({
//       url: '/home/multidata'
//     }),
//     axios({
//       url: '/home/multidata'
//     })
//   ]
// // ).then(results => {
// //   console.log(results);
// // })
// // 可以使用以下方法直接分开取到数组内的两个数据
// ).then(axios.spread((res1,res2) => {
//   console.log(res1);
//   console.log(res2);
// }))

// axios({
//   url: '/category'
// })



/******************************************axios实例************************************************************/
// 不使用全局配置
// const instance1 = axios.create({
//   baseURL: 'http://152.136.185.210:8000/api/n3',
//   timeout: 5000
// })

// instance1({
//   url: 'home/multidata'
// }).then(res => {
//   console.log(res);
// })

// instance1({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })
// // 可以配置多个实例，当base地址不同时
// const instance2 = axios.create({
//   baseURL: 'http://152.136.185.210:8000/api/n3',
//   timeout: 6000,
//   headers: {}
// })

/******************************************封装request************************************************************/
import {request1} from './network/request'

// 方法一：回调函数获取到请求数据
request1({
  url: '/home/multidata'
},res => {
  console.log(res)
},err => {
  console.log(err)
})
// 方法二：也可以写成下面的方法（还是回调函数）
import {request2} from './network/request'
request2({
  baseConfig:{
    url: '/home/multidata'
  },
  success: function (res) {
    console.log(res)
  },
  failure: function (err) {
    console.log(err)
  }
})
// 方法三：使用Promise
import {request3} from './network/request'
request3({
  url:'/home/multidata'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
// 方法四
import {request4} from './network/request'
request4({
  url:'/home/multidata'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

// 拦截器
import {request5} from './network/request'
request5({
  url:'/home/multidata'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})