<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Just a test</h2>
    <span>{{ message }}</span>
    <p><input v-model="message"></p>
    <button v-bind:disabled="someDynamicCondition">Button</button>
    <p v-if="seen">看到我了</p>
    <li>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </li>
  <p><button v-on:click.once="reverseMessage">逆转消息</button></p>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      msg: '哈喽，我是测试页',
      message: '当前时间：' + new Date(),
      seen: true,
      someDynamicCondition: false,
      todos: [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '整个牛项目' }
    ]

    }
  },
  methods:{
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('');
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
