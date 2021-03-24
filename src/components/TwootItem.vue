<template>
  <div>
    <div class="twoot">
      {{ twoot.data }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TwootItem',
  props: {
    twoot: Object
  }
}
</script>

<style>
.twoot {
  color: tomato;
}
</style>
