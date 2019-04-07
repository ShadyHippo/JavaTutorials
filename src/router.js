import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Assignment0 from './views/Assignment0.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/assignment0',
      name: 'assignment0',
      component: function () { 
        return import('./views/Assignment0.vue')
      }
    },
    {
      path: '/assignment1',
      name: 'assignment1',
      component: function () { 
        return import('./views/Assignment1.vue')
      }
    }
  ]
})
