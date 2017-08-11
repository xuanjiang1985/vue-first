<template>
  <div class="container">
    <h2>最新心情</h2>
    <div v-for="msg in msgs" class="well well-lg">
    	{{ msg.Content }} -- <i class="fa fa-sun-o"></i> {{ msg.Created_at }}
    </div>
  </div>
</template>

<script>

export default {
	data () {
		return {
			msgs: []
		}
	},
	mounted() {
		this.getMsg();
	},
	methods: {
		getMsg() {
			this.axios.get(this.$store.state.host + '/msg').then(response =>{
				this.msgs = response.data.data;
			}, response => {
				console.log('can not ge data');
			})
		}
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>