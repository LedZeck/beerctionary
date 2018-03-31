import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '../components/welcome/Welcome'
import Home from '../components/Home'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Welcome,
      name: 'welcome'
    },
    {
      path: '/home',
      component: Home,
      name: 'home'
    }
  ]
})
