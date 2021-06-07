import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PageBase from '@/views/PageBase.vue'
import Profile from '@/views/Profile.vue'
import WorkList from '@/views/WorkList.vue'
// work pages below
import WordIsMine from '@/views/work/WordIsMine.vue'
import ComeTrue from '@/views/work/ComeTrue.vue'

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
                path: 'works',
                name: 'works',
                component: WorkList,
            },
            {
                path: 'works/word-is-mine',
                name: 'word-is-mine',
                component: WordIsMine
            },
            {
                path: 'works/cometrue',
                name: 'cometrue',
                component: ComeTrue,
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router