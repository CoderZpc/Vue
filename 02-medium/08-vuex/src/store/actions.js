export default {
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
}