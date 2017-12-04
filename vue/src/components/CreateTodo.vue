<template>
  <div>
    <input v-model="title">
    <button @click="createTodo">追加</button>
  </div>
</template>

<script>
  import {LOGGED_IN_USER, CREATE_TODO} from '../constants/graphql'

  export default {
    name: 'CreateTodo',
    data () {
      return {
        title: ''
      }
    },
    methods: {
      createTodo () {
        this.$apollo.query({
          query: LOGGED_IN_USER
        }).then((result) => {
          this.create(result.data.loggedInUser.id)
        })
      },
      create (id) {
        this.$apollo.mutate({
          mutation: CREATE_TODO,
          variables: {
            authorId: id,
            title: this.title
          }
        }).then(() => {
          this.title = ''
          this.$emit('refresh')
        })
      }
    }
  }
</script>
