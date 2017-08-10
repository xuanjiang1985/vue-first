<template>
  <nav id="navbar">
    <ul class="nav nav-pills">
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/content">心情</router-link></li>
      <li><router-link to="/photo">美图</router-link></li>
      <li><router-link to="/video">视频</router-link></li>
    </ul>
    <div id="login">
      <router-link to="/login" class="btn btn-info">登录</router-link>
    </div>
  </nav>
</template>
<script>

export default {
  
}

</script>
<style scoped>
#navbar {position: relative; background-color: #f5f5f5;}
#navbar ul {margin-left: 15%;}
#login {position: absolute; top: 2px; right: 10px;}
</style>