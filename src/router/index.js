import { createRouter, createWebHistory } from 'vue-router'
import Catalog from "../views/Catalog";

const routes = [
  {
    path: '/',
    name: 'Catalog',
    component: Catalog
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

