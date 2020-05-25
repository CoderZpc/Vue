<template>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="deepPink">
      <!-- 在webpack.base.js中添加别名，但因为是html，不能直接省略，需要加上'~' -->
        <img src="~assets/img/tabbar/home.svg" alt slot="item-icon" />
        <img src="~assets/img/tabbar/home_active.svg" alt slot="item-icon-active" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="deepPink">
        <img src="~assets/img/tabbar/category.svg" alt slot="item-icon" />
        <img src="~assets/img/tabbar/category_active.svg" alt slot="item-icon-active" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="deepPink">
        <img src="~assets/img/tabbar/shopcart.svg" alt slot="item-icon" />
        <img src="~assets/img/tabbar/shopcart_active.svg" alt slot="item-icon-active" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="deepPink">
        <img src="~assets/img/tabbar/profile.svg" alt slot="item-icon" />
        <img src="~assets/img/tabbar/profile_active.svg" alt slot="item-icon-active" />
        <div slot="item-text">个人</div>
      </tab-bar-item>
    </tab-bar>
</template>
<script>
import TabBar from "./tabbar/TabBar";
import TabBarItem from "./tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>
<style scoped>
</style>
