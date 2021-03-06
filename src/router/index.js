import {createRouter, createWebHistory} from 'vue-router'
import UserProfile from '../views/UserProfile.vue'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import store from '@/store'
import {users} from '@/assets/users'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/user/:userId',
        name: 'UserProfile',
        component: UserProfile,
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin,
        meta: {
            requiresAdmin: true,
        },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(async (to, _, next) => {
    let isAdmin = false
    const user = store.state.UserStore.user

    if (!user) {
        await store.dispatch('UserStore/setUser', users[0])
        isAdmin = users[0].isAdmin
    }

    const requiresAdmin = to.matched.some((record) => record.meta.requiresAdmin)

    if (requiresAdmin && !isAdmin) {
        next({name: 'Home'})
    } else {
        next()
    }
})

export default router
