<template>
    <div>
        <div id="nav" class="header">
            <router-link to="/">
                <div class="logo" to="/">
                    <h4>Twotter</h4>
                </div>
            </router-link>
            <router-link to="/user/1">
                {{ state.user.username }}
            </router-link>
        </div>
        <router-view />
    </div>
</template>

<script lang="ts">
import {reactive} from 'vue'

export default {
    name: 'App',
    setup() {
        const state = reactive({
            user: {
                username: 'Novvan',
            },
        })

        return {state}
    },
}
</script>

<style lang="scss">
#app {
    font-family: Poppins, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100vh;
    width: 100vw;
    background-color: #f7f9f7;
    text-align: start;

    .header {
        height: 3.5rem;
        background-color: #1dd1a1;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}

#nav {
    a {
        font-weight: bold;
        color: #fff;
        text-decoration: none;
    }
    padding: 30px;
}
</style>
