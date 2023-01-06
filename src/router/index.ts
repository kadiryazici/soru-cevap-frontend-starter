import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue'),
      meta: {
        withSidebar: true,
      },
    },
    {
      path: '/question/:questionId',
      name: 'Question',
      component: () => import('../views/QuestionView.vue'),
      meta: {
        withSidebar: true,
      },
    },
    {
      path: '/signin',
      name: 'Signin',
      component: () => import('../views/Signin.vue'),
      meta: {
        flexPage: true,
      },
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('../views/Signup.vue'),
      meta: {
        flexPage: true,
      },
    },
  ],
  scrollBehavior(_to, _from, position) {
    if (position)
      return position

    return { left: 0, top: 0 }
  },
})

export default router
