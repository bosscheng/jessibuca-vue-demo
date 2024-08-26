import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import MainLayout from '@/layout/MainLayout.vue'
import Player1 from '@/views/Player1.vue'
import Player2 from '@/views/Player2.vue'
import Home from '@/views/Home.vue'



const routes = [
    {
        path: "/",
        name: 'home',
        component: MainLayout,
        children: [
            {
                path: 'main',
                name: 'main',
                component: Home
            },
            {
                path: 'player1',
                name: 'player1',
                component: Player1
            },
            {
                path: 'player2',
                name: 'player2',
                component: Player2
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
