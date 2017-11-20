<template>
  <div v-if="isLoggedIn">
    <logout></logout>
  </div>
</template>

<script>
  import Logout from './Logout'

  export default {
    name: 'Todos',
    components: {
      Logout
    },
    computed: {
      isLoggedIn () {
        return this.$root.$data.token
      }
    }
  }
</script>
