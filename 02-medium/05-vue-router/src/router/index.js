// 配置路由相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'

// ES6路由懒加载写法
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')

import About from '../components/About'
import USer from '../components/User'

const Profile = () => import('../components/Profile')
// 1.通过Vue.use(插件),安装插件
Vue.use(VueRouter)

// 2.创建VueRouter对象
const routes = [
  {
    path: '',
    // 路由默认配置，redirect重定向
    redirect: '/home'
  },
  {
    // 必须加‘/’
    path: '/home',
    component: Home,
    // 元数据，描述数据的数据
    meta: {
      title: '首页'
    },
    // 嵌套路由配置
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        // 子路由不加‘/’
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    },
  },
  // 1)params类型的参数传递
  {
    // 拼接用户信息，动态路由
    path: '/user/:userId',
    component: USer,
    meta: {
      title: '用户'
    },
  },
  // 2)query类型的参数传递
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    },
  }
]

const router = new VueRouter({
  // 配置路径和组件的应用关系
  routes,
  // 选择路由的处理方法，hash或者history
  mode: 'history',
})

/*****************************************导航守卫****************************************************/
// 通过router对象，在点击不同链接时更改浏览器上方的title
// router.beforeEach(function (to, from, next) {

// })
// 可以写成下面的箭头函数
/*
* 不论前置还是后置，都是全局；
* 可以在routes中添加路由独享守卫beforeEnter()；
* 组件内也可以有守卫
*/ 
// 前置守卫（guard），跳转前进行回调
router.beforeEach((to, from, next) => {
  /*
   * to：即将要进入的目标的路由对象 
   * from：当前导航即将要离开的对象
   * next：调用该方法后，才能进入下一个钩子
   */

  // 从from跳转到to
  // 在routes中定义meta
  // 因为首页有嵌套，有children，所以不能写成 to.meta.title
  console.log(to);
  document.title = to.matched[0].meta.title
  
  // 必须调用，可以传参数
  next()
})
// 后置钩子（hook），跳转后进行回调
router.afterEach((to, from) => {

})
/**********************************************************************************************************/

// 3.将router对象传入Vue实例中，到main.js挂载
export default router
