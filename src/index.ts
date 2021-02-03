import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

import Home from './components/Home.vue';
import About from './components/About.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from) => {
    console.log(from, to);
});

const app = createApp(App);
app.use(router);
app.mount('#app')
