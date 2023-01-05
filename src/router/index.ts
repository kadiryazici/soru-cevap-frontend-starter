import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/question/:questionId',
      name: 'Question',
      component: () => import('../views/QuestionView.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('../views/Signup.vue'),
    },
  ],
  scrollBehavior(_to, _from, position) {
    if (position)
      return position

    return { left: 0, top: 0 }
  },
})

export default router
