import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Signup from '../views/Signup'
import Login from '../views/Login'
import Boards from '../views/Boards'
import Board from '../views/Board'
import store from '../store/index'

Vue.use(VueRouter)

function loginRouteProtection(to, from, next) {
  if(store.getters.isLoggedIn) {
    next();
  } else {
    next('/');
  }
}

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
    component: Boards,
    beforeEnter: loginRouteProtection
  },
  {
    path: '/board/:id',
    name: 'board',
    component: Board,
    beforeEnter: loginRouteProtection
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
