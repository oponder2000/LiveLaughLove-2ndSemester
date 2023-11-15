import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Game from '../views/Game.vue'
import Editor from '../views/Editor.vue'
import TTS from '../components/TTSOptions.vue'
import Font from '../components/FontManager.vue'
import { compile } from 'vue'

// This file controls the routing of the App
// see vue-router docs for more info
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/game',
        name: 'game',
        component: Game,
    },
    {
        path: '/editor',
        name: 'editor',
        component: Editor,
    },
    {
        path: '/tts',
        name: 'tts',
        component: TTS,
    },
    {
        path: '/font',
        name: 'font',
        component: Font,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;