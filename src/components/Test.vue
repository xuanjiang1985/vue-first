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
    <hello-com father-eee="hello father" v-bind:father="fatherdata"></hello-com>
  </div>
</template>

<script>
import hello from './Hello'

export default {
  components: {
    'hello-com':hello
  },
  created () {
    fetch('http://localhost:8081/msg')
    .then(function(response) {
        return response.json()
      }).then(function(json) {
        console.log('parsed json', json)
      }).catch(function(ex) {
        console.log('whatwg-fetch error ->', ex)
      })

  },
  data () {
    return {
      msg2: '哈喽，我是测试页',
      message: '当前时间：' + new Date(),
      seen: true,
      someDynamicCondition: false,
      mymsgs: 1222222,
      fatherdata: 'fatherdata'
    }
  },
  
  methods:{
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('');
        console.log(`hello test ${ this.mymsgs }`);
        this.fatherdata = 'fatherdata changed';
      }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
