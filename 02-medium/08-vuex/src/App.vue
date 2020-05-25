<template>
  <div id="app">
    <h2>----------Vuex---------</h2>
    <hello-vuex :count="count" />

    <h2>----------App---------</h2>
    <h2>{{message}}</h2>
    <h2>{{count}}</h2>
    <button @click="count++">+</button>
    <button @click="count--">-</button>

    <h2>--------------App内容：state相关---------</h2>
    <h2>{{$store.state.count}}</h2>
    <!-- 不建议这么修改，不能通过devtools跟踪修改过程 -->
    <!-- <button @click="$store.state.count++">+</button>
    <button @click="$store.state.count--">-</button>-->

    <h2>--------------App内容：mutations相关---------</h2>
    <button @click="addtion">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStu">增加学生</button>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">更新信息</button>

    <h2>--------------App内容：getters相关---------</h2>
    <h2>{{$store.getters.powerCount}}</h2>
    <h2>{{$store.getters.moreAge20Stu}}</h2>
    <h2>{{$store.getters.moreAgeStuLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(36)}}</h2>
    <!-- 使用v-for时记得加:key -->
    <table>
      <tr v-for="items in $store.getters.moreAge20Stu" :key="items.id">
        <td v-for="item in items" :key="item[0]">{{item}}
        </td>
      </tr>
    </table>

    <h2>--------------App内容：modules相关---------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click="asyncUpdateName">异步修改</button>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
import {
  INCREMENT
} from './store/mutations-types'

export default {
  name: "App",
  components: {
    HelloVuex
  },
  data() {
    return {
      message: "我是App组件",
      count: 0
    };
  },
  methods: {
    addtion() {
      // 通过vuex的mutations修改state，是使用commit来调用mutations
      this.$store.commit(INCREMENT);
    },
    subtraction() {
      this.$store.commit("decrement");
    },
    addCount(num) {
      // Payload 负载
      // 1.mutations的普通提交风格
       // num传过去只是一个数字
      this.$store.commit("incrementCount", num);

      // 2.mutations的特殊提交风格
      // num传过去不只是数字而是一个对象
      // this.$store.commit({
      //   type:"incrementCount", 
      //   num
      // });
    },
    addStu() {
      const stu = { id: 115, name: "Jack", age: 44 };
      this.$store.commit("addStudent", stu);
    },
    updateInfo(){
      // this.$store.commit("updateInfo");
      // 在action中不用commit，用dispatch
      // 可以传字符串，函数，对象等
      this.$store.dispatch('aUpdateInfo','成功')// .then可以写到这里.then(() => {})
      
      // this.$store.dispatch('aUpdateInfo',()=>{
      //   console.log('更新完成');
      // })
    },
    updateName(){
      this.$store.commit('updateName','Curry')
    },
    asyncUpdateName(){
      this.$store.dispatch('aUpdateName')
    }
  }
};
</script>

<style>
</style>
