<template>
  <div class="twoot" @click="likeTwoot(twoot.id)">
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
    username: {type: String, required: true}
  },
  methods: {
    likeTwoot(id) {
      this.$emit('liked', id)
    }
  }
}
</script>

<style scoped>
.twoot {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid whitesmoke;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.25s ease;
}
.twoot:hover {
  transform: scale(1.1, 1.1);
}

.twoot__user {
  font-weight: bold;
}
</style>
