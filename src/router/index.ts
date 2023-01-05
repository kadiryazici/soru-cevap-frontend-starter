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
  scrollBehavior(_to, _from, position) {
    if (position)
      return position

    return { left: 0, top: 0 }
  },
})

export default router
