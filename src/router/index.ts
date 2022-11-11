import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RecipeView from '../views/RecipeView.vue'
import Error from '../views/ErrorView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/recipe/:id',
      name: 'recipe',
      component: RecipeView,
    },
    {
      path: '/error',
      name: 'error',
      component: Error,
    }
  ]
})

export default router
