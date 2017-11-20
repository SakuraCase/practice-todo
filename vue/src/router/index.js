import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Todos from '../components/Todos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/todos',
      component: Todos
    }
  ]
})
