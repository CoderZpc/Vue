<template>
  <div>
    <h2>我是cpn组件的标题</h2>
    <p>我是cpn组件内容</p>
    <h2>{{name}}</h2>
  </div>
</template>

<script>
export default {
  name:'cpn',
  data(){
    return{
      name: 'CPN组件的name'
    }
  }
}
</script>

<style scoped>

</style>