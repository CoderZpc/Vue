<template>
  <div id="app">
    <h2>我是app组件</h2>
    <h2>vue的组件在使用是不用大写，用小写加‘-’</h2>
    <!-- 
      router-link的属性
      to：指定路径跳转
      tag：指定渲染成什么组件
      replace：不需要默认值，不会留下history记录，浏览器的返回键不能点击
    -->
    <!-- <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about">关于</router-link>-->

    <!-- 如果不使用router-link，通过代码修改路由 -->
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>-->

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- 在url中动态绑定用户信息 -->
    <!-- 1.params类型的参数传递 -->
    <router-link :to="'/user/'+userId">用户</router-link>
    <!-- 2.query类型的参数传递 -->
    <router-link :to="{path: '/profile',query:{name:'pc',age:18,height:1.83}}">档案</router-link>
    <!-- keep-alive标签避免组件重新渲染，不论是用户，首页，关于，档案，都不会销毁
         但是不想缓存某个组件时，使用exclude属性，可以用,分割传多个参数（中间不能加空格）
         也可使用include属性指定要保留的组件 -->
    <keep-alive exclude="Profile">
      <router-view></router-view>
    </keep-alive>
    <!-- 通过button传递参数 -->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "lisi"
    };
  },
  methods: {
    homeClick() {
      // 1.通过pushState修改，可以返回
      // this.$router.push('/home')
      // 2.通过replace修改，不能返回
      // $router指的是index.js中的router对象
      // $route指的是目前活跃的路由
      this.$router.replace("/home");
    },
    aboutClick() {
      this.$router.replace("/about");
    },
    userClick() {
      this.$router.push("/user/" + this.userId);
    },
    profileClick() {
      this.$router.push({
        path: "/profile",
        query: {
          name: "James",
          age: 23,
          height: 2.03
        }
      });
    }
  }
};
</script>

<style>
</style>
