import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/MyCloud.vue'
import Sidebar from '../views/Sidebar.vue'
import Search from '@/views/search.vue'
import Favorites from '@/components/Favorites.vue'
import SharedFiles from '@/components/SharedFiles.vue'
import UnsavedFiles from '@/components/UnsavedFiles.vue'
import UploadedFiles from '@/components/UploadedFiles.vue'

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
      // this generates a separate chunk (Sidebar.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Sidebar.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/sharedfiles',
      name: 'sharedfiles',
      component: SharedFiles
    },
    { path: '/unsavedfiles',
      name: 'unsavedfiles',
      component: UnsavedFiles
    },
    {
      path: '/uploadedfiles',
      name: 'uploadedfiles',
      component: UploadedFiles
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: Favorites
    }
  ]
})

export default router
