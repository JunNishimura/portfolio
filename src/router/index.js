import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PageBase from '@/views/PageBase.vue'
import Profile from '@/views/Profile.vue'
import WorkList from '@/views/WorkList.vue'
// work pages below
import WordIsMine from '@/views/work/WordIsMine.vue'
import ComeTrue from '@/views/work/ComeTrue.vue'
import InfoDesign2 from '@/views/work/InfoDesign2.vue'
import Nuink from '@/views/work/Nuink.vue'
import HotokeToWatashi from '@/views/work/HotokeToWatashi.vue'
import Jitan from '@/views/work/Jitan.vue'
import ARCreator from '@/views/work/ARCreator.vue'
import Innofes from '@/views/work/Innofes.vue'

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
            },
            {
                path: 'works/Jitan',
                name: 'jitan',
                component: Jitan
            },
            {
                path: 'works/HotokeToWatashi',
                name: 'hotoke-to-watashi',
                component: HotokeToWatashi
            },
            {
                path: 'works/ARCreator',
                name: 'ar-creator',
                component: ARCreator
            },
            {
                path: 'works/Nuink',
                name: 'nuink',
                component: Nuink
            },
            {
                path: 'works/Innofes',
                name: 'innofes',
                component: Innofes
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router