import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/home/home.vue'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
  ]
})

export default router
