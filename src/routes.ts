import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/Home.vue';
import About from './components/About.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/:pathMatch(.*)*', component: Home }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from) => {
    console.log(from, to);
});

export default router;
