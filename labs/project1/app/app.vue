<template>
  <div id="app">
    <DataDisplay v-bind:whiskeys="this.whiskeys" />
  </div>
</template>

<script>
// import DataDisplay from "./components/DataDisplay";

export default {
  name: "App",
  data: function () {
    return {
      whiskeys: null,
    };
  },
  components: {
    DataDisplay,
  },
  mounted: function () {
    fetch("data/data.json")
      .then((response) => response.json())
      .then((jsonData) => {
        console.log(jsonData);
        this.whiskeys = jsonData;
      });
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>