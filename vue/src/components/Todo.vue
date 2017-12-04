<template>
  <div>
    <input type="checkbox" @click="done" :checked="todo.done">
    <input v-model="title">
    <button @click="edit">編集</button>
    <button @click="del">削除</button>
  </div>
</template>

<script>
  import {UPDATE_TODO, DELETE_TODO} from '../constants/graphql'

  export default {
    name: 'Todo',
    props: ['todo'],
    data () {
      return {
        title: this.todo.title
      }
    },
    methods: {
      done () {
        this.$apollo.mutate({
          mutation: UPDATE_TODO,
          variables: {
            id: this.todo.id,
            done: !this.todo.done
          }
        }).then(() => {
          this.$emit('refresh')
        })
      },
      edit () {
        this.$apollo.mutate({
          mutation: UPDATE_TODO,
          variables: {
            id: this.todo.id,
            title: this.title
          }
        }).then(() => {
          this.$emit('refresh')
        })
      },
      del () {
        this.$apollo.mutate({
          mutation: DELETE_TODO,
          variables: {
            id: this.todo.id
          }
        }).then(() => {
          this.$emit('refresh')
        })
      }
    }
  }
</script>
