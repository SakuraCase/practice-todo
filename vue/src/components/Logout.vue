<template>
  <button @click="logout()">Logout</button>
</template>

<script>
  import { AUTH_TOKEN } from '../constants/settings'

  export default {
    name: 'Logout',
    methods: {
      logout () {
        localStorage.removeItem(AUTH_TOKEN)
        this.$root.$data.token = localStorage.getItem(AUTH_TOKEN)
        this.$router.push({path: '/'})
      }
    }
  }
</script>
