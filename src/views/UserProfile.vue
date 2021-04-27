<template>
    <div class="userProfile">
        <div class="userProfile__leftColumn">
            <div class="userProfile__userPanel">
                <h3 class="userProfile__username">
                    {{ state.user.username }}
                </h3>
                <h3>{{ userId }}</h3>
                <div v-if="state.user.isAdmin" class="userProfile__adminBadge">
                    Admin
                </div>
                <div class="userProfile__followers">
                    <strong>Followers: </strong> {{ state.followers }}
                </div>
            </div>
            <NewTwootForm @newTwoot="createNewTwoot" />
        </div>
        <div class="userProfile__twootsWrapper">
            <TwootItem
                v-for="twoot in latestTwoots"
                :key="twoot.id"
                :twoot="twoot"
                :username="state.user.username"
            />
        </div>
    </div>
</template>

<script>
import {computed, reactive} from 'vue'
import {useRoute} from 'vue-router'

import TwootItem from '@/components/Twoot'
import NewTwootForm from '@/components/NewTwootForm'
import {users} from '@/assets/users'

export default {
    name: 'UserProfile',
    components: {
        TwootItem,
        NewTwootForm,
    },

    setup() {
        const route = useRoute()
        const userId = computed(() => route.params.userId)

        const state = reactive({
            followers: 0,
            user: users[userId.value - 1] || users[0],
        })

        //Methods
        function followUser() {
            state.followers++
        }

        function createNewTwoot(content) {
            if (content !== '')
                state.user.twoots.push({
                    id: state.user.twoots.length + 1,
                    data: content,
                    likes: 0,
                })
        }

        const fullName = computed(() => {
            return `${state.user.firstName} ${state.user.lastName}`
        })
        const latestTwoots = computed(() => {
            return state.user.twoots.slice(0).reverse()
        })

        return {
            state,
            followUser,
            createNewTwoot,
            fullName,
            latestTwoots,
            userId,
        }
    },

    mounted() {
        this.followUser()
    },
}
</script>

<style scoped lang="scss">
h1 {
    margin: 0;
}

.userProfile {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 50px;
    padding: 50px 5%;

    .userProfile__leftColumn {
        position: sticky;

        .userProfile__userPanel {
            display: flex;
            flex-direction: column;
            padding: 20px;
            background-color: white;
            border-radius: 5px;
            border: 1px solid #dfe3e8;

            .userProfile__username {
                margin-bottom: 15px;
                font-weight: 300;
            }

            .userProfile__adminBadge {
                margin-bottom: 5px;
                color: white;
                font-size: 12px;
                font-weight: bold;
                margin-right: auto;
                padding: 2.5px 5px;
                background-color: #9b59b6;
                border-radius: 5px;
                border: 1px solid #8e44ad;
            }
        }
    }

    .userProfile__twootsWrapper {
        display: grid;
        grid-gap: 10px;
    }
}
</style>
