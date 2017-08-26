<template>
  <div id="app">
    <navbar></navbar>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <footer>My first vue app 
    <a href="https://github.com/xuanjiang1985/vue-first" target="_blank">前端源码</a>
    <a href="https://github.com/xuanjiang1985/vue-first-backend">后端源码</a>
     &copy; 2017 
    </footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components: {Navbar}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
footer {margin-top: 100px; text-align: center;}
.fade-enter-active, .fade-leave-active {
  transition: all .3s ease;
}
.fade-enter, .fade-leave-active {
  opacity:0;
}
</style>
