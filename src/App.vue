<template>
  <div id="app">
    <navbar></navbar>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <footer>I am the FOOTER my Blog &copy; 2017</footer>
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
  text-align: center;
  color: #2c3e50;
}
footer {margin-top: 100px;}
.fade-enter-active, .fade-leave-active {
  transition: all .3s ease;
}
.fade-enter, .fade-leave-active {
  opacity:0;
}
</style>
