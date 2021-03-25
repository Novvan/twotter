<template>
  <div id="nav" class="header">
    <router-link to="/"><h4>Twotter</h4></router-link>
    <router-link to="/profile">{{ state.user.username }}</router-link>
  </div>
  <router-view />
</template>

<script lang="ts">
import {reactive} from 'vue'

export default {
  name: 'app',
  setup() {
    const state = reactive({
      user: {
        username: 'Novvan'
      }
    })

    return {state}
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
  background-color: #f7f9f7;

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
  padding: 30px;

  a {
    font-weight: bold;
    color: #fff;

    &.router-link-exact-active {
      text-decoration: underline;
    }
  }
}
</style>
