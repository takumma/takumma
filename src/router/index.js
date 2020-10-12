import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TimeLine from '../views/TimeLine.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tl',
    name: 'TimeLine',
    component: TimeLine
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
