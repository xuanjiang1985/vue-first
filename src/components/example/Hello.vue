<template>
  <div class="hello">
  <my-com></my-com>
    <p>{{ count }}</p>
    <h1>{{ father }}</h1>
    <h1>{{ fatherEee }}</h1>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <router-link :to="{'name':'Test'}">测试</router-link>
    <p><a href="/test">测试2</a></p>
    <p><button v-on:click="startCount">count</button></p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: ['father','fatherEee'],
  data() {
    return {
      msg: '我是hello vue',
      count: this.$store.state.count
    }
  },
  created() {
    console.log(this.$store.state.count);
  },
  methods: {
    startCount: function(){
      this.$store.commit('increment')
      this.count = this.$store.state.count
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
