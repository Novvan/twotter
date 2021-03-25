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
      <form
        action=""
        class="userProfile__newTwootForm"
        @submit.prevent="createNewTwoot"
      >
        <label for="newTwoot" class="userProfile__newTwootLabel">
          <strong>New Twoot</strong>
        </label>
        <textarea
          id="newTwoot"
          rows="5"
          placeholder="Type your new twoot!"
          v-model="newTwootContent"
        />
        <div class="userProfile__newTwootType">
          <label for="newTwootType" class="userProfile__newTwootTypeLabel">
            Type:
          </label>
          <select
            id="newTwootType"
            class="userProfile__newTwootType"
            v-model="newTwootType"
          >
            <option
              :value="option.value"
              v-for="(option, index) in twootOptions"
              :key="index"
            >
              {{ option.value }}
            </option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary">
          Twoot!
        </button>
      </form>
    </div>
    <div v-if="user.twoots.length > 0" class="userProfile__twootsWrapper">
      <TwootItem
        v-for="twoot in latestTwoots"
        :key="twoot.id"
        :twoot="twoot"
        :username="computedUserName"
        @liked="toggleLike"
      />
    </div>
  </div>
</template>

<script>
import TwootItem from './Twoot'

export default {
  name: 'UserProfile',
  components: {
    TwootItem
  },
  data() {
    return {
      newTwootContent: null,
      newTwootType: 'Instant',
      followers: 0,
      twootOptions: [
        {
          value: 'Draft'
        },
        {
          value: 'Instant'
        }
      ],
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
            data: 'New vue app running',
            likes: 0
          },
          {
            id: 3,
            data: 'Hello World',
            likes: 0
          },
          {
            id: 4,
            data: 'Pedro pascal sucks',
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
    },
    computedUserName() {
      return `@${this.user.username}`
    },
    latestTwoots() {
      return this.user.twoots.slice(0).reverse()
    }
  },
  methods: {
    followUser() {
      this.followers++
    },
    toggleLike(id) {
      console.log('Favourited tweert numbr: ' + id)
    },
    createNewTwoot() {
      if (this.newTwootContent != null && this.newTwootType !== 'Draft')
        this.user.twoots.push({
          id: this.user.twoots.length + 1,
          data: this.newTwootContent,
          likes: 0
        })
      this.newTwootContent = ''
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
  grid-gap: 50px;
  padding: 50px 5%;
}
.userProfile__userPanel {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #dfe3e8;
}
.userProfile__adminBadge {
  color: white;
  font-size: 12px;
  font-weight: bold;
  margin-right: auto;
  padding: 2.5px 5px;
  background-color: #9b59b6;
  border-radius: 5px;
  border: 1px solid #8e44ad;
}
.userProfile__twootsWrapper {
  display: grid;
  grid-gap: 10px;
}
.userProfile__newTwootForm {
  padding-top: 25px;
  display: flex;
  flex-direction: column;
}
</style>
