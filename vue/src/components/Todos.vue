<template>
  <div>
    <h4 v-if="loading">Loading Todos...</h4>
    <div v-else>
      <h3>タスク追加</h3>
      <create-todo @refresh="init"></create-todo>

      <h3>未完了タスク</h3>
      <todo v-for="(todo, i) in tasks" @refresh="init" :key="todo.id" :todo="todo"></todo>

      <h3>完了タスク</h3>
      <todo v-for="(todo, i) in done" @refresh="init" :key="todo.id" :todo="todo"></todo>
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
        loading: 0
      }
    },
    components: {
      Todo,
      CreateTodo
    },
    created () {
      this.init()
    },
    computed: {
      done: function () {
        return this.todos.filter(todo => todo.done === true)
      },
      tasks: function () {
        return this.todos.filter(todo => todo.done === false)
      }
    },
    methods: {
      init () {
        this.$apollo.query({
          query: LOGGED_IN_USER
        }).then((result) => {
          this.queryTodos(result.data.loggedInUser.id)
        })
      },
      queryTodos (id) {
        this.$apollo.query({
          query: USER_TODOS,
          variables: {
            id: id
          }
        }).then((result) => {
          // Todo追加と削除のとき上手く動いてない
          this.todos = result.data.User.todos
        })
      }
    }
  }
</script>
