<template>
  <Layout>
    <Suspense v-if="!partidas"><p>carregando</p></Suspense>

    <ul>
      <li v-for="item in partidas">{{ item.idevento }}</li>
    </ul>
    <slot></slot>
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
import { Suspense } from "vue";

const gestaoSocio = new GestaoSocio();

const res = await gestaoSocio.getProximosJogos();
// console.log(res.data.result);
const partidas = res.data.result;
</script>
