import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import AllSongsPage from "@/pages/AllSongsPage.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
    },
    {
        path: '/allSongs',
        name: 'allSongs',
        component: AllSongsPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
