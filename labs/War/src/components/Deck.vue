<template>
  <div>
    <h2>Full Deck</h2>
    <div v-for="card in cards">
      <p>
        {{ card.suit }} - {{ card.value }} - {{card.name}}</p>
    </div>
  </div>
</template>





<script>
export default {
  name: "Deck",
  props: {
    props: Objects
  }
};
</script>