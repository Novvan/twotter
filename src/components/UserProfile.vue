<template>
  <div class="userProfile">
    <div class="userProfile__userPanel">
      <h1 class="userProfile__username">
        {{ user.username }}
      </h1>
      <div v-if="user.isAdmin" class="userProfile__adminBadge">Admin</div>
      <div class="userProfile__followers">
        <strong>Followers: </strong> {{ followers }}
      </div>
    </div>
    <div v-if="user.twoots.length > 0" class="userProfile__twootsWrapper">
      <TwootItem
        v-for="twoot in user.twoots"
        :key="twoot.id"
        :twoot="twoot"
        :username="user.username"
      />
    </div>
  </div>
</template>

<script>
import TwootItem from './TwootItem'

export default {
  name: 'UserProfile',
  components: {
    TwootItem
  },
  data() {
    return {
      followers: 0,
      user: {
        id: 1,
        username: 'NoVvaN',
        firstName: 'Ian',
        lastName: 'Geier',
        email: 'ian@example.com',
        loggedIn: true,
        isAdmin: true,
        twoots: [
          {
            id: 1,
            data: 'WHAT A FANTASTIC DAY',
            likes: 0
          },
          {
            id: 2,
            data: 'WHAT A FANTASTIC DAY',
            likes: 0
          },
          {
            id: 3,
            data: 'WHAT A FANTASTIC DAY',
            likes: 0
          },
          {
            id: 4,
            data: 'WHAT A FANTASTIC DAY',
            likes: 0
          }
        ]
      }
    }
  },
  watch: {
    followers(newFollowerCount, oldFollowerCount) {
      if (newFollowerCount > oldFollowerCount) {
        console.log('Gained a user!')
      }
    }
  },
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`
    }
  },
  methods: {
    followUser() {
      this.followers++
    }
  },
  mounted() {
    this.followUser()
  }
}
</script>

<style>
h1 {
  margin: 0;
}
.userProfile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  padding: 50 5%;
}
.userProfile__userPanel {
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #dfe3e8;
}
.userProfile__adminBadge {
  color: white;
  font-weight: bold;
  margin-right: auto;
  padding: 2.5px 5px;
  background-color: #e74c3c;
  border-radius: 5px;
  border: 1px solid #c0392b;
}
</style>
