<template>
  <nav id="navbar">
    <ul class="nav nav-pills">
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/content">心情</router-link></li>
      <li><router-link to="/photo">美图</router-link></li>
      <li><router-link to="/profile">我的设置</router-link></li>
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
#navbar {position: relative; background-color: #f5f5f5; padding: 5px 0;}
#navbar ul {margin-left: 10%;}
#login {position: absolute; top: 7px; right: 10px;}
</style>