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
    {
        path: '/:pathMatch(.*)*',
        redirect: '/',
    },
];
const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL),
});

router.beforeEach((to, from, next) => {
    if (to.name === 'first' || to.name === 'second' || to.name === 'third') {
        const isCompleted = localStorage.getItem('completed');

        if (isCompleted) {
            next({ name: 'fourth' });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
