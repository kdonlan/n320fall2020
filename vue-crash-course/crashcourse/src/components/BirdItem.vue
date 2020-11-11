<template>
  <div class="bird-check" v-bind:class="{ 'is-seen': bird.seen }">
    <ul>
      <li>{{ bird.color }} {{ bird.name }}</li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "BirdItem",
  props: ["bird"],
};
</script>

<style scoped>
</style>


<style scoped>
.bird-check {
  width: 500px;
  /* background-color: pink; */
}

.is-seen {
  background-color: yellow;
}

ul {
  list-style: none;
  text-align: left;
}
</style>