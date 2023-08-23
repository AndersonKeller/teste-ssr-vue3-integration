<template>
  <h1>Welcome</h1>
  This page is:
  <ul>
    <li>Rendered to HTML.</li>
    <li>Interactive. <Counter /></li>
  </ul>
  <ul>
    <li v-for="item in partidas">{{ item }}</li>
  </ul>
</template>

<script setup>
// import { render } from "vue";
import GestaoSocio from "../../controllers/GestaoSocio.controller";
import I from "../../controllers/SuperIngresso.controller";
import Counter from "./Counter.vue";
const gestaoSocio = new GestaoSocio();
const ingresso = new I();
await ingresso.getApresentacoes();
const res = await gestaoSocio.getProximosJogos();
const partidas = res.data;
console.log(partidas);
</script>
