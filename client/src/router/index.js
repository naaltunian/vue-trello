import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Signup from '../views/Signup'
import Login from '../views/Login'
import Boards from '../views/Boards'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/boards',
    name: 'boards',
    component: Boards
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
