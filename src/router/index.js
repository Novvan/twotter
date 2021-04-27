import {createRouter, createWebHashHistory} from 'vue-router'
import Profile from '../views/Profile.vue'

const routes = [
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
