<template>
    <form
        action=""
        class="newTwootForm"
        :class="{'--exceeded': newTwootCharCount > 180}"
        @submit.prevent="createNewTwoot"
    >
        <label for="newTwoot" class="newTwootLabel">
            <strong>New Twoot </strong>
            ({{ newTwootCharCount }}/180)
        </label>
        <textarea
            id="newTwoot"
            v-model="state.newTwootContent"
            rows="5"
            placeholder="Type your new twoot!"
        />
        <div class="newTwootFooter">
            <div>
                <label for="newTwootType" class="newTwootTypeLabel">
                    Type:
                </label>
                <select
                    id="newTwootType"
                    v-model="state.newTwootType"
                    class="newTwootType"
                >
                    <option
                        v-for="(option, index) in state.twootOptions"
                        :key="index"
                        :value="option.value"
                    >
                        {{ option.value }}
                    </option>
                </select>
            </div>
            <button
                type="submit"
                class="btn newTwootTypeButton"
                :disabled="newTwootCharCount > 180"
            >
                Twoot!
            </button>
        </div>
    </form>
</template>

<script>
import {computed, reactive} from 'vue'

export default {
    name: 'NewTwootForm',
    setup(props, ctx) {
        const state = reactive({
            newTwootContent: '',
            newTwootType: 'Instant',
            twootOptions: [
                {
                    value: 'Draft',
                },
                {
                    value: 'Instant',
                },
            ],
        })

        const newTwootCharCount = computed(() => {
            return state.newTwootContent.length
        })

        function createNewTwoot() {
            if (
                state.newTwootContent !== '' &&
                state.newTwootType !== 'Draft' &&
                state.newTwootContent.length <= 180
            ) {
                ctx.emit('newTwoot', state.newTwootContent)
                state.newTwootContent = ''
            }
        }

        return {state, newTwootCharCount, createNewTwoot}
    },
}
</script>

<style lang="scss" scoped>
.newTwootForm {
    padding-top: 25px;
    display: flex;
    flex-direction: column;

    .newTwootFooter {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .newTwootTypeLabel {
            margin-right: 10px;
        }

        .newTwootType {
            padding-right: 25px;
        }

        .newTwootTypeButton {
            background-color: #1dd1a1;
            color: #fff;
        }
    }

    textarea {
        margin-bottom: 15px;
    }

    &.--exceeded {
        color: #ff6b6b;
        border-color: #ff6b6b;

        textarea {
            border-color: #ff6b6b;
            color: #ff6b6b;
        }

        .newTwootTypeButton {
            background-color: #ff6b6b;
        }
    }
}
</style>
