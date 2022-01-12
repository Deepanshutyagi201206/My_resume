import Vue from 'vue'
import VueRouter from 'vue-router'
import Contacts from '../components/Contacts.vue'
import Home from '../views/Home.vue'
import Personaldetails from "../components/Personaldetails.vue";
import Address from "../components/Address.vue";
import Qualification from "../components/Qualification.vue";
import Skills from '../components/Skills.vue'
import Work from "../components/Work.vue";
import Projects from "../components/Projects.vue";
import Achievement from "../components/Achievement.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Achievement',
    name: 'Achievement',
    component: Achievement
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/Work',
    name: 'Work',
    component: Work
  },
  {
    path: '/Skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/Qualification',
    name: 'Qualification',
    component: Qualification
  },
  {
    path: '/Address',
    name: 'Address',
    component: Address
  },
  {
    path: '/Personaldetails',
    name: 'Personaldetails',
    component: Personaldetails
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
