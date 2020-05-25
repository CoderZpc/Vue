export default{
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
}