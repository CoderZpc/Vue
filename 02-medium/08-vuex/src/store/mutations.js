import {
  INCREMENT
} from './mutations-types'

export default {
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
}