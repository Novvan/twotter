<template>
    <div class="home">
        <h1>{{ state.name }}</h1>
        <div class="usersList">
            <router-link
                v-for="user in users"
                :key="user.id"
                :to="{name: 'UserProfile', params: {userId: user.id}}"
            >
                {{ user.username }}
            </router-link>
        </div>
    </div>
</template>

<script>
import {reactive} from 'vue'
import {users} from '@/assets/users'
export default {
    name: 'Home',
    components: {},
    setup() {
        const state = reactive({
            name: 'HOMEPAGE',
        })
        return {state, users}
    },
}
</script>

<style lang="scss" scoped>
.home {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 50px;
    padding: 50px 5%;

    .usersList {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
}
</style>
