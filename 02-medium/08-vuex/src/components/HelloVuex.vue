<template>
  <div>
    <h2>{{count}}</h2>
    <h2>{{$store.state.count}}</h2>
  </div>
</template>
<script>
export default {
   name:'HelloVuex',
   props:{
     count:Number
   }
}
</script>
<style scoped>

</style>
