<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return{
      path: '/home/news'
    }
  },
  // 通过created函数更改title，生命周期函数
  created() {
    console.log("home created");
    // document.title = '首页'
  },
  destroyed() {
    console.log('home destroyed');
  },

  // 点击其它标签切换回首页时，显示之前离开时的状态，比如离开前是“消息”，切回来还显示“消息”
  // 1.在router-view外面加keep-alive标签
  // 2.在组件加path默认值
  // 3.在activated给要默认的路由
  activated(){    //只有组件中被保持状态使用了keep-alive标签时，才会执行activated()或deactivated()
    // this.$router.push(this.path)
    console.log('activated');
    this.$router.push(this.path).catch(err => err)
  },
  // 4.在离开组件跳转前更新path（组件守卫）
  beforeRouteLeave(to, from, next){
    this.path = this.$route.path;
    next()
  }
};
</script>

<style scoped>
</style>