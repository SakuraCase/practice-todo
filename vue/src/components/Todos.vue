<template>
  <div>
    <h4 v-if="loading">Loading Todos...</h4>
    <todo v-for="todo in todos" :key="todo.id" :todo="todo"></todo>
  </div>
</template>

<script>
  import {USER_TODOS, LOGGED_IN_USER} from '../constants/graphql'
  import Todo from './Todo'

  export default {
    name: 'Todos',
    data () {
      return {
        todos: [],
        loading: 0
      }
    },
    components: {
      Todo
    },
    created () {
      this.$apollo.query({
        query: LOGGED_IN_USER
      }).then((result) => {
        this.queryTodos(result.data.loggedInUser.id)
      })
    },
    methods: {
      queryTodos (id) {
        this.$apollo.query({
          query: USER_TODOS,
          variables: {
            id: id
          }
        }).then((result) => {
          this.todos = result.data.User.todos
        })
      }
    }
  }
</script>
