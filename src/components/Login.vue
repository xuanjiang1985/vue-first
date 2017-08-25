<template>
  <div class="container">
  <br>
  <br>
    <div class="panel panel-default" v-if="login">
        <div class="panel-heading">
            <h3 class="panel-title">
                登录
            </h3>
        </div>
        <div class="panel-body">
            <div class="alert col-sm-offset-3 col-sm-6" id="loginAlert" v-bind:class="{'alert-danger': active}">
            {{ status }}
            </div>
            <form class="form-horizontal col-sm-offset-3 col-sm-6">
                <div class="form-group">
                    <input type="text" class="form-control" v-model="phone" placeholder="手机号">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" v-model="password" placeholder="密码">
                </div>
                <div class="form-group">
                    <span class="btn btn-primary" v-on:click="validLogin">登录</span> <i id="isLogin"></i>
                </div>
            </form>
            <br><br>
        </div>
    </div>
    <div class="alert alert-success" v-else>你已登录</div>
  </div>
</template>

<script>

export default {
    data () {
        return {
            phone: "",
            password:"",
            status:"",
            login: true,
            active: false
        }
    },
    mounted() {
        this.isLogin();
    },
    methods: {
        validLogin() {
            if (this.phone == "") {
                this.active = true;
                this.status = "手机号不能为空!";
                return false
            }

            if (this.phone.length != 11 || isNaN(this.phone)) {
                this.active = true;
                this.status = "手机号格式不对!";
                return false
            }
            var psd = this.password.replace(/\s+/g,"");
            if (psd == "") {
                this.active = true;
                this.status = "密码不能为空!";
                return false
            }

            if (psd.length < 6) {
                this.active = true;
                this.status = "密码至少为6位!";
                return false
            }

            this.active = false;
            this.status = "";
            $("#isLogin").addClass("fa fa-spin fa-spinner");
            //post login
            this.postLogin()
        },
        postLogin() {
            this.axios.post(this.$store.state.host + '/login', {
                "phone": this.phone,
                "password": this.password
              })
            .then(response =>{
                    if (response.data.code != 200) {
                    this.active = true;
                    this.status = response.data.msg;
                    $("#isLogin").removeClass("fa fa-spin fa-spinner");
                    } else {
                        localStorage.setItem('token', response.data.token);
                        localStorage.setItem('userName', response.data.userName);
                        localStorage.setItem('userHeader', response.data.userHeader);
                        localStorage.setItem('userId', response.data.userId);
                        // this.$store.state.token = response.data.token;
                        // this.$store.state.userName = response.data.userName;
                        // this.$store.state.userId = response.data.userId;
                        // this.$store.state.userHeader = response.data.userHeader;
                        //console.log(response.data.token);
                        location.href = "/";
                    }
                 }, response => {
                     console.log(response);
            })
        },
        isLogin() {
            if (this.$store.state.token == null) {
                this.login = true;
            } else {
                this.login = false;
            }
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>