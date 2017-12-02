<template>
  <div>
    {{todo.title}}
  </div>
</template>

<script>
  export default {
    name: 'Todo',
    props: ['todo']
  }
</script>
