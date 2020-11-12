<template>
  <div id="app">
    <HelloWorld msg="Common Birds Found in Indiana" />
    <Birds v-bind:birds="birds"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Birds from "./components/Birds.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Birds
  },
  data() {
    return {
      birds: [
        { id: 0, name: "Cardinal", seen: true, color: "Red",  image: "./assets/bluebird.png"},
        { id: 1, name: "Hawk", seen: true, color: "Brown and gray", image: "./assets/bluebird.png"},
        { id: 2, name: "Titmouse", seen: false, color: "Gray and orange", image: "./assets/bluebird.png" },
        { id: 3, name: "Chickadee", seen: true, color: "Black and white", image: "./assets/bluebird.png" },
        { id: 4, name: "Eastern Bluebird", seen: false, color: "Blue and orange", image: "./assets/bluebird.png"},
        { id: 5, name: "Goldfinch", seen: true, color: "Black and yellow", image: "./assets/bluebird.png" }
      ],
    };
  },
};
</script>

<style>
#app {
  box-sizing: border-box;
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* display: flex;
  flex-direction: row; */
  /* margin-top: 60px; */
}
</style>
