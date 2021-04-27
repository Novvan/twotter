<template>
    <div class="twoot">
        <div class="twoot__user">
            {{ username }}
        </div>
        <div class="twoot__content">
            {{ twoot.data }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'TwootItem',
    props: {
        twoot: {type: Object, required: true},
        username: {type: String, required: true},
    },
}
</script>

<style scoped lang="scss">
.twoot {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    border: 1px solid whitesmoke;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.25s ease;

    &:hover {
        transform: scale(1.1, 1.1);
    }

    .twoot__user {
        font-weight: bold;
    }
}
</style>
