<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// tabbar
import index from './pages/index.vue'

export default {

  name: 'App',

  data(){
    return {
      
    }
  },
  
  components: {
    index
  }
}
</script>

<style>

body {
  margin: 0em;
  background-color: white;
}
/* 图片轮播样式 */
.swipe {
  width: 100%;
  height: 12em;
}
.mint-swipe-item:nth-child(1) {
  background-color: aquamarine;
}
.mint-swipe-item:nth-child(2) {
  background-color: rgb(175, 248, 106);
}
.mint-swipe-item:nth-child(3) {
  background-color: rgb(247, 161, 48);
}

</style>
