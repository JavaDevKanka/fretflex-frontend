import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import AllSongsPage from "@/pages/SongsLibrary.vue";
import AllGenresPage from "@/pages/AllGenresPage.vue";
import AllMusiciansPage from "@/pages/AllMusiciansPage.vue";
import ChordLibraryPage from "@/pages/ChordLibraryPage.vue";
import TunerPage from "@/pages/TunerPage.vue";
import SongPage from "@/pages/SongPage.vue";
import AddSongPage from "@/pages/AddSongPage.vue";
import SongsLibrary from "@/pages/SongsLibrary.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
    },
    {
        path: '/songsLibrary',
        name: 'songsLibrary',
        component: SongsLibrary
    },
    {
        path: '/allGenres',
        name: 'allGenres',
        component: AllGenresPage
    },
    {
        path: '/allMusicians',
        name: 'allMusicians',
        component: AllMusiciansPage
    },
    {
        path: '/chordLibrary',
        name: 'chordLibrary',
        component: ChordLibraryPage
    },
    {
        path: '/tuner',
        name: 'tuner',
        component: TunerPage
    },
    {
        path: '/exampleSong',
        name: 'exampleSong',
        component: SongPage
    },
    {
        path: '/addSong',
        name: 'addSong',
        component: AddSongPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
