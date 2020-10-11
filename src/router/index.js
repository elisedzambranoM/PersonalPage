import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../page/Home.vue'
import Resumen from '../page/Resumen.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path:'/resumen',
        name: 'Resumen',
        component: Resumen

    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router