<template>
  <div>
    <h3>The birds I have seen are highlighted below:</h3>
    <div v-for="bird in birds" v-bind:key="bird.id">
        <BirdItem v-bind:bird="bird"/>
    </div>
  </div>
</template>

<script>
import BirdItem from "./BirdItem.vue"

export default {
  name: "Birds",
  components: {
    BirdItem
  },
  props: ["birds"],
};
</script>