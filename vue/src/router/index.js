import Vue from 'vue'
import Router from 'vue-router'
import Todos from '../components/Todos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/todos',
      component: Todos
    }
  ]
})
