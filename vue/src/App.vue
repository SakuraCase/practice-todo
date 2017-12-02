<template>
  <div id="app">
    <logout v-if="isLoggedIn"></logout>
    <login v-else></login>

    <router-view/>
  </div>
</template>

<script>
  import Logout from './components/Logout'
  import Login from './components/Login'

  export default {
    name: 'app',
    components: {
      Logout,
      Login
    },
    computed: {
      isLoggedIn () {
        return this.$root.$data.token
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
