import Vue from 'vue'
import Vuex from 'vuex'
import {
  INCREMENT
} from './mutations-types'

// 1.安装插件
Vue.use(Vuex)

const modulesA = {
  state: {
    name: 'Rose'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  getters: {
    fullName(state) {
      return state.name + '111'
    },
    fullName2(state, getters) {
      return getters.fullName + '222'
    },
    // 拼接state的count
    fullName3(state, getters, rootstate) {
      return getters.fullName2 + rootstate.count
    }
  },
  actions: {
    aUpdateName(context) {
      // context包含很多东西
      console.log(context);
      // 在module中的commit只作用于module中的mutations
      setTimeout(() => {
        context.commit('updateName', 'Wade')
      }, 1000);
    }
  }
}

// 2.创建对象
// 响应式的（前提：初始化时先在store中定义）
const store = new Vuex.Store({
  // 存放状态信息，可以通过$store.state.count使用
  state: {
    count: 100,
    students: [
      { id: 110, name: 'Zpc', age: 18 },
      { id: 111, name: 'James', age: 23 },
      { id: 112, name: 'Lebron', age: 50 },
      { id: 113, name: 'Tom', age: 39 },
      { id: 114, name: 'Jerry', age: 36 }
    ],
    info: {
      name: 'Lebron', age: 36, height: 2.03
    }
  },

  // store.state更新的唯一方式；可以通过this.$store.commit('increment')使用，同步方法，可以在devtools中追踪
  mutations: {
    // increment是事件类型，后面的是回调函数，第一个参数是state
    [INCREMENT](state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    // 传入除了state之外的参数
    incrementCount(state, num) {
      state.count += num
    },
    addStudent(state, stu) {
      state.students.push(stu)
    },
    updateInfo(state) {
      // 1  /修改，响应式
      state.info.name = 'James'
      // 2  /增加
      // 非响应式，界面不会改变
      // state.info['address'] = 'Los Angeles'
      // 响应式，界面会改变
      // Vue.set(state.info, 'address', 'Los Angeles')

      // 3  /删除
      // 非响应式，界面不会改变
      // delete state.info.age
      // 响应式，界面会改变
      // Vue.delete(state.info, 'age')

      // 模拟异步操作，在devtools没有记录到，所以不要在mutations进行异步操作    ❌
      // setTimeout(() => {
      //   state.info.name = 'James'
      // }, 1000);
    }
  },

  // 类似mutations，但是用来替代mutations进行异步操作
  actions: {
    // 默认参数context：上下文;还可以传别的参数
    aUpdateInfo(context, payload) {
      // setTimeout(() => {
      //   context.commit('updateInfo')
      //   payload()
      // }, 1000);
      // 可以使用回调函数
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo')
          console.log(payload);
          resolve();
        }, 1000);
        // .then可以写到调用的函数那里，可以分开写在App.vue   updateInfo()
      }).then(() => {

      })
    }
  },

  // 类似于计算属性，可以通过$store.getters.powerCount使用；当state经过一些变化再给其它组件使用时，使用getters
  getters: {
    powerCount(state) {
      return state.count * state.count
    },
    moreAge20Stu(state) {
      return state.students.filter(s => s.age > 30)
    },
    // getters第二个参数为getters
    moreAgeStuLength(state, getters) {
      return getters.moreAge20Stu.length
    },
    // 通过getters传参数
    moreAgeStu(state) {
      // return function(age){
      //   return state.students.filter(s => s.age > age)
      // }
      // 也可写成
      return age => {
        return state.students.filter(s => s.age > age)
      }
    }
  },

  // 
  modules: {
    a: modulesA
  }
})

// 3.导出
export default store


const obj = {
  name: 'zpc',
  age: 18,
  height: 1.83
}

/****************对象的解构********************/
// 麻烦
// const name = obj.name
// const age = obj.age
// const height = obj.height

// 简便
const { name, height, age } = obj   // 参数顺序可以不同，名字相同即可