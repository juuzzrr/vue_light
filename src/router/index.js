import Vue from 'vue'
import VueRouter from 'vue-router'
import Off from '../views/Off.vue'
import On from '../views/On.vue'
import of from '../views/of.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/Off',
    component: Off,
    name: 'off'
  },
  {
    path: '/On',
    component: On,
    name: 'on'
  },
  {
    path: '/',
    component: of,
    name: 'of'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router