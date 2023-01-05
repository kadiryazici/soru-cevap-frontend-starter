import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/question/:questionId',
      name: 'Question',
      component: () => import('../views/QuestionView.vue'),
    },
  ],
})

export default router
