<template>
  <div>
    <h1>my index {{ num }}</h1>
    <router-link :to="{name: 'content', params: {id: 123}}">content page</router-link>
  </div>
</template>

<script>
export default {
  data() {
  	return {num: 1000}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>