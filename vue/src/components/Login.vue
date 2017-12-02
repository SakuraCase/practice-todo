<template>
  <div>
    <input v-model="email" type="text" placeholder="Email">
    <input v-model="password" type="password" placeholder="Password">
    <button @click="confirm()">Login</button>
  </div>
</template>

<script>
  import {AUTH_TOKEN} from '../constants/settings'
  import {LOGIN_MUTATION} from '../constants/graphql'

  export default {
    name: 'Login',
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      confirm () {
        const {email, password} = this.$data

        this.$apollo.mutate({
          mutation: LOGIN_MUTATION,
          variables: {
            email,
            password
          }
        }).then((result) => {
          const token = result.data.authenticateUser.token
          localStorage.setItem(AUTH_TOKEN, token)
          this.$root.$data.token = localStorage.getItem(AUTH_TOKEN)
          this.$router.push({path: '/todos'})
        }).catch((error) => {
          alert(error)
        })
      }
    }
  }
</script>

