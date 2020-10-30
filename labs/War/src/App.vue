<template>
    <div id="app">


    </div>
</template>

<script>
// import Deck from "./components/Deck";
import Card from "./components/Card";

export default {
  name: "App",
  data: function () {
    return {
      cards: null,
    };
  },
  components: {
    Card
  },
  mounted: function () {
    fetch("public/data/cards.json")
      .then((response) => response.json())
      .then((jsonData) => {
        console.log(jsonData);
        this.cards = jsonData;
      })
  },
};
</script>