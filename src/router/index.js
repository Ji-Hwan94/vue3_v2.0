import Login from '@/views/Login.vue';
import NotFound from '@/views/NotFound/NotFound.vue';
import Notice from '@/views/Support/Notice.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
    },
    {
      path: '/react',
      children: [
        {
          path: 'support',
          children: [
            {
              path: 'notice',
              component: Notice,
            },
          ],
        },
      ],
    },
  ],
});

export default router;
