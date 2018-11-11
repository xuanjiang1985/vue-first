<template>
  <div class="container">
    <br><br>
    <h3><img v-bind:src="userHeader"></h3>
    <h3>用户名：{{ userName }}</h3>
    <h3>创建时间：{{ userCreate }}</h3>
  </div>
</template>

<script>
export default {
    data () {
        return {
            userName: "",
            userHeader:"",
            userCreate:"",
        }
    },
    mounted() {
        this.getUser();
    },
    methods: {
    	getUser() {
			this.axios.get(this.$store.state.host + '/v1/profile',{
				params: {
					id: this.$store.state.userId
				}
			}).then(response =>{
				if (response.data.code == 200) {
					this.userName = response.data.userName;
					this.userCreate = response.data.created_at;
					this.userHeader = response.data.userHeader;
				} else {
					console.log("unkowon");
				}
				
			}, response => {
				console.log('can not ge data');
			})
		}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2,h3 {text-align: center;}
</style>