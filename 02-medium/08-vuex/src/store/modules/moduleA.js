export default{
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