import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        redirect: '/first',
        children: [
            {
                path: 'first',
                name: 'first',
                component: () => import('@/pages/PageFirst.vue'),
            },
            {
                path: 'second',
                name: 'second',
                component: () => import('@/pages/PageSecond.vue'),
            },
            {
                path: 'third',
                name: 'third',
                component: () => import('@/pages/PageThird.vue'),
            },
            {
                path: 'fourth',
                name: 'fourth',
                component: () => import('@/pages/PageFourth.vue'),
            },
        ],
    },
];
const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL),
});

export default router;
