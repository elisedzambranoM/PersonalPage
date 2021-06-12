import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../page/Home.vue'
import Resumen from '../page/Resumen.vue'
import Proyectos from '../page/Proyectos.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta:{
            title:'home',
        }
    },
    {
        path:'/resumen',
        name: 'Resumen',
        component: Resumen,
        meta:{
            title: 'resumen',
        }  
    },
    {
        path:'/proyectos',
        name:'Proyectos',
        component: Proyectos,
        meta:{
            title:'proyectos',
        }

    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })

router.beforeEach((toRoute, fromRoute, next) =>{
    window.document.title = toRoute.meta && toRoute.meta.title ? toRoute.meta.title : 'Home';

    next();
})
  
  export default router