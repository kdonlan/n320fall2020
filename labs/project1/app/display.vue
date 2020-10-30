<template>
  <div>
    <h2>Top 3 Whiskey Brands</h2>
    <div>
      <p>
        {{ player1Score }} - {{ player2Score }} proof <br /><strong>{{
          whiskey.value
        }}</strong>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["whiskeys"],
  data: function () {
    return {
      test: "HELLO HELLO",
    };
  },
  name: "DataDisplay",
};
</script>