import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProgramsView from '../views/ProgramsView.vue'
import ClassesView from '../views/ClassesView.vue'
import ProfIdView from '../views/ProfIdView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/programs',
    name: 'programs',
    component: ProgramsView
  },
  {
    path: '/classes',
    name: 'classes',
    component: ClassesView
  },
  {
    path: '/:id',
    name: 'prof',
    component: ProfIdView
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
