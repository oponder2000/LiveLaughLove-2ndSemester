import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Game from '../views/Game.vue'
import Editor from '../views/Editor.vue'
import TTS from '../components/TTSOptions.vue'
import { compile } from 'vue'

// This file controls the routing of the App
// see vue-router docs for more info
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            font: 'Arial', // Set the desired font for this route
          },
    },
    {
        path: '/game',
        name: 'game',
        component: Game,
        meta: {
            font: 'Arial', // Set the desired font for this route
          },
    },
    {
        path: '/editor',
        name: 'editor',
        component: Editor,
        meta: {
            font: 'Arial', // Set the desired font for this route
          },
    },
    {
        path: '/tts',
        name: 'tts',
        component: TTS,
        meta: {
            font: 'Arial',
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;