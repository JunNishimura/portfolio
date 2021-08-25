import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PageBase from '@/views/PageBase.vue'
import Profile from '@/views/Profile.vue'
import WorkList from '@/views/WorkList.vue'
// work pages below
import WordIsMine from '@/views/work/WordIsMine.vue'
import ComeTrue from '@/views/work/ComeTrue.vue'
import InfoDesign2 from '@/views/work/InfoDesign2.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/jn',
        name: 'pagebase',
        component: PageBase,
        children: [
            {
                path: 'profile',
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
            },
            {
                path: 'works/InfoDesign2',
                name: 'infodesign2',
                component: InfoDesign2
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router