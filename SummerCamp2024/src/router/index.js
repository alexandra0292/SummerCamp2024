import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import FeedbackPage from '../views/FeedbackPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path:'/feedback',
      name:"feedback",
      component: FeedbackPage
    },
    
  ]
})

export default router
