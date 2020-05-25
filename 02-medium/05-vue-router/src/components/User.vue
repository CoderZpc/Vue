<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户界面的相关信息</p>
    <h2>{{userId}}</h2>
    <h2>{{$route.params.userId}}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>
<script>
export default {
  name: "User",
  // 通过created函数更改title
  // created() {
  //   console.log("created");
  //   document.title = "用户";
  // },
  computed: {
    userId() {
      // $router指的是index.js中的router对象，也就是总的router
      // $route指的是目前活跃的路由对象
      // params是获取参数
      return this.$route.params.userId;
    }
  },
  methods: {
    btnClick() {
      console.log(this.$router);
      console.log(this.$route);
      // 所有的组件都继承自Vue类的原型
      this.test();
    }
  }
};
</script>
<style scoped>
</style>
