<template>
  <div>
    <h3>{{ mymsgs }}</h3>
    <h1>{{ msg2 }}</h1>
    <h2>Just a test</h2>
    <span>{{ message }}</span>
    <p><input v-model="message"></p>
    <button v-bind:disabled="someDynamicCondition">Button</button>
    <p v-if="seen">看到我了</p>
    <p><button v-on:click.once="reverseMessage">逆转消息</button></p> 
    <hello-com></hello-com>
  </div>
</template>

<script>
var hello = require('./Hello.vue');
export default {
  components: {
    'hello-com':hello
  },
  ready () {
    this.$http.get('http://localhost:8081/msg').then(response => {
      this.mymsgs = response.data;
      console.log(response.data.data);
    }), response => {
      console.log(response);
    }

  },
  data () {
    return {
      msg2: '哈喽，我是测试页',
      message: '当前时间：' + new Date(),
      seen: true,
      someDynamicCondition: false,
      mymsgs: null
    }
  },
  
  methods:{
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('');
      }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
