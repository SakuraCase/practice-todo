<template>
  <div>
    <h4 v-if="loading">Loading Todos...</h4>
    <div v-else>
      <h3>タスク追加</h3>
      <create-todo @refresh="resetStore"></create-todo>

      <h3>未完了タスク</h3>
      <todo v-for="(todo, i) in tasks" @refresh="resetStore" :key="todo.id" :todo="todo"></todo>

      <h3>完了タスク</h3>
      <todo v-for="(todo, i) in done" @refresh="resetStore" :key="todo.id" :todo="todo"></todo>
    </div>
  </div>
</template>

<script>
  import {USER_TODOS, LOGGED_IN_USER} from '../constants/graphql'
  import Todo from './Todo'
  import CreateTodo from './CreateTodo'

  export default {
    name: 'Todos',
    data () {
      return {
        todos: [],
        user: '',
        loading: 0
      }
    },
    components: {
      Todo,
      CreateTodo
    },
    computed: {
      done () {
        return this.todos.filter(todo => todo.done === true)
      },
      tasks () {
        return this.todos.filter(todo => todo.done === false)
      }
    },
    apollo: {
      user: {
        query: LOGGED_IN_USER,
        update (data) {
          return data.loggedInUser.id
        }
      },
      todos: {
        query: USER_TODOS,
        variables () {
          return {
            id: this.user
          }
        },
        update (data) {
          return data.User.todos
        }
      }
    },
    methods: {
      resetStore () {
        this.$apollo.provider.defaultClient.resetStore()
      }
    }
  }
</script>
