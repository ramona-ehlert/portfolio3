import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Pizza from '@/views/Pizza.vue'
// import Brickbtm from '../view/Brickbtm.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
 
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  },
  {
    path: '/tweeter',
    name: 'Tweeter',
    component: () => import( '../views/Tweeter.vue')
  },
  {
    path: '/brickbtm',
    name: 'Brickbtm',
    component: () => import( '../views/Brickbtm.vue')
  },
  {
    path: '/brickcom',
    name: 'Brickcom',
    component: () => import( '../views/Brickcom.vue')
  },
  {
    path: '/tarpit',
    name: 'Tarpit',
    component: () => import( '../views/Tarpit.vue')
  },
  {
    path: '/pizza',
    name: 'Pizza',
    component: () => import( '../views/Pizza.vue')
  },
   
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
