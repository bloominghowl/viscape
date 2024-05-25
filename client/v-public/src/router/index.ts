import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/MyCloud.vue'
import about from '../views/Sidebar.vue'
import Categories from '@/components/Categories.vue'
import SharedFiles from '@/components/SharedFiles.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sidebar',
      name: 'sidebar',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Sidebar.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      component: Categories
    },
    {
      path: '/sharedfiles',
      name: 'sharedfiles',
      component: SharedFiles
    }
  ]
})

export default router
