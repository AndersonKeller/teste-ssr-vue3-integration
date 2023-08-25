<template>
  <button @click="allclose">CLIENT</button>

  <!-- <h1>Welcome</h1>
  This page is:
  <ul>
    <li>Rendered to HTML.</li>
    <li>Interactive. <Counter /></li>
  </ul>
  <ul>
    <li v-for="item in partidas">{{ item }}</li>
  </ul> -->
</template>

<script setup>
function allclose() {
  console.log("client");
}
</script>
<style>
button {
  position: fixed;
  bottom: 200px;
  left: 100px;
}
</style>
