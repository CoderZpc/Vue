import axios from 'axios'

// 方法一：回调函数获取到请求数据，
export function request1(config, success, failure) {
  // 1.创建实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/n3',
    timeout: 5000
  })
  // 2.发送真正的网络请求
  instance(config).then(res => {
    success(res)
  }).catch(err => {
    failure(err)
  })
}
// 方法二：回调函数
export function request2(config) {
  // 1.创建实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/n3',
    timeout: 5000
  })
  // 2.发送真正的网络请求
  instance(config.baseConfig).then(res => {
    config.success(res)
  }).catch(err => {
    config.failure(err)
  })
}
// 方法三：使用Promise
export function request3(config) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: 'http://152.136.185.210:8000/api/n3',
      timeout: 5000
    })
    instance(config).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
// 方法四:
export function request4(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/n3',
    timeout: 5000
  })
  // 本身返回的就是Promise
  return instance(config)
}

/*****************************************axios拦截器*************************************************/
export function request5(config) {
  // 1.创建实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/n3',
    timeout: 5000
  })
  // 2.axios拦截器
  // 全局写法：axios.interceptors
  // 实例调用写法
  // 请求拦截
  instance.interceptors.request.use(config => {
    console.log(config);
    // config被拦截后要返回，否则第三步没有config
    return config
  }, err => {
    console.log(err)
  })
  // 响应拦截
  instance.interceptors.response.use(res => {
    console.log(res);
    // config被拦截后要返回，否则第三步没有config
    return res    // 一般返回res.data
  }, err => {
    console.log(err)
  })
  // 3.发送真正的网络请求
  return instance(config)
}