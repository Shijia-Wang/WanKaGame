import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Success from '@/components/Success'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Success',
      name: 'Success',
      component: Success
    },
    {
      path: '/Error',
      name: 'Error',
      component: Error
    }
  ]
})
