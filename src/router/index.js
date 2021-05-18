import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PageBase from '@/views/PageBase.vue'
import Profile from '@/views/Profile.vue'
import Work from '@/views/Work.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/',
        name: 'pagebase',
        component: PageBase,
        children: [
            {
                path: '/profile',
                name: 'profile',
                component: Profile
            },
            {
                path: '/work',
                name: 'work',
                component: Work
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router