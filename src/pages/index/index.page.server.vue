<template>
  <Layout>
    <ul>
      <li v-for="item in partidas">
        <p>{{ item.idevento }}</p>
      </li>
    </ul>
    <button>CLIENT</button>
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
import Layout from "@/layout/Hub.vue";
import GestaoSocio from "../../controllers/GestaoSocio.controller";
import Service from "../../controllers/Service.controller";
const gestaoSocio = new GestaoSocio();
const usuario = new Service();
const banners = await usuario.axios.get(
  `${usuario.ENDPOINTS.GETCONTEUDOS}banners_intenacional`
);
const fullBanner = banners.data.result.filter((item) => {
  //

  if (item.tags.includes("banner_carroussel")) {
    item.subtitulo = JSON.parse(item.subtitulo);
    const obj = {
      desktop: item.subtitulo.desktop,
      mobile: item.subtitulo.mobile,
      link: item.link,
    };
    return obj;
  }
});
console.log(fullBanner);
const res = await gestaoSocio.getProximosJogos();
// const banner = await gestaoSocio.
// console.log(res.data.result);
const partidas = res.data.result;
</script>
<style>
button {
  position: fixed;
  bottom: 200px;
  left: 100px;
}
</style>
