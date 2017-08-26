<template>
  <nav id="navbar">
    <ul class="nav nav-pills">
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/content">心情</router-link></li>
      <li><router-link to="/photo">美图</router-link></li>
      <li><router-link to="/profile">我的设置</router-link></li>
    </ul>
    <div id="login">
      <router-link to="/login" class="btn btn-info" v-if="login">登录</router-link>
        <div v-else>
          <img v-bind:src="userHeader" v-on:click="userInfo" id="img-header">
            <ul id="user-dropdown">
              <li><span>{{ userName }}</span></li>
              <li><router-link to="/logout"><i class="fa fa-sign-out" aria-hidden="true"></i> 退出登陆</router-link></li>
            </ul>
          </div>
    </div>
  </nav>
</template>
<script>

export default {
  data() {
        return {
            login: true,
            userName: this.$store.state.userName,
            userHeader: this.$store.state.userHeader
        }
    },
    mounted() {
        this.checkLogin();
        
    },
    methods:{
      checkLogin() {
        if(this.$store.state.token == null) {
            this.login = true;
            console.log('islogin:no');
            //console.log(this.$store.state.token);
        } else {
            this.login = false;
            console.log('islogin:yes');
            //console.log(this.$store.state.token);
            //console.log(this.userHeader);
        }
      },
      userInfo() {
          if($("#user-dropdown").is(":hidden")){
            $("#user-dropdown").show();
          } else {
            $("#user-dropdown").hide();
          }

      }
    }
}

</script>
<style scoped>
#navbar {position: relative; background-color: #f5f5f5; padding: 5px 0;}
#navbar ul {margin-left: 10%;}
#login {position: absolute; top: 7px; right: 10px;}
#img-header {display: inline-block; width: 40px;height: 40px;border:2px solid white; border-radius: 20px; cursor: pointer;}
#user-dropdown {display: none; position: absolute; right: -18px;padding: 10px 0; text-align: center; color: #515151;background-color: white;box-shadow: -2px 2px 5px #828282;}
#user-dropdown li {width: 100px;padding-top: 10px; list-style-type: none;}
#user-dropdown li a {display: inline-block;width: 100%; font-size: 14px;}
#user-dropdown li span {color: #32CD32;}
</style>