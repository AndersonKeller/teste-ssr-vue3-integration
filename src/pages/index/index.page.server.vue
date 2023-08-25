<template>
  <Layout>
    <ul>
      <li v-for="item in partidas">
        <p>{{ item.idevento }}</p>
      </li>
    </ul>
    <button @click="allclose">CLIENT</button>
  </Layout>
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
import GestaoSocio from "@/controllers/GestaoSocio.controller";
import Layout from "@/layout/Hub.vue";

const gestaoSocio = new GestaoSocio();

const res = await gestaoSocio.getProximosJogos();
// console.log(res.data.result);
const partidas = res.data.result;
</script>
