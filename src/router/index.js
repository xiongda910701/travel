import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/containers/home/index'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
