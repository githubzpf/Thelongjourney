<template>
  <div class="login">
    <button @click='btn'>登陆</button>
  </div>
</template>

<script>
export default {
  name: 'login',
  methods: {
    btn () {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
