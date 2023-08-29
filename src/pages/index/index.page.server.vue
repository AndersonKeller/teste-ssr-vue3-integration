<template>
  <Layout>
    <CarrousselBanner :img_banners="allBanners" />
    <!-- <Carroussel
      class="carroussel-news-home"
      :slides="noticias_categoria"
      category="Noticias"
      type="news"
      :show="4"
      :title="`${$t_('news')}`"
      background="https://internacionalcloudfront.eleventickets.com/Novo_layout/bg-home-noticias-23.jpg"
      cardLink="NoticiasSubtitulo"
    />-->
    <NextMatches :disponivel="partidas" />
    <!-- <nav class="nav-toggle-carroussel-team">
      <button
        v-for="(item, index) in showTeam[0]"
        @click="() => toggleTeam(item, index)"
      >
        {{ item.name }}
      </button>
    </nav>
    <Carroussel
      :slides="jogadores"
      type="players"
      :show="3"
      :title="`${$t_('EQUIPE')}`"
      background="https://internacionalcloudfront.eleventickets.com/Novo_layout/bg-home-team-23.jpg"
    />
    <TitleCarroussel />
    <CarrousselOTT />
    <SponsorCarroussel position="1" />
     <BannerShorts /> 
    <ShopVitrine />
    <SponsorCarroussel position="2" /> -->
  </Layout>
</template>

<script setup>
import Layout from "@/layout/Hub.vue";

import Service from "../../controllers/Service.controller";
import CarrousselBanner from "../../ds/components/institucional/CarrousselBanner.vue";
import NextMatches from "../../ds/partials/hub/NextMatches.vue";
import { getMatches } from "./nextMatches";

const usuario = new Service();

async function getBanners() {
  const banners = await usuario.axios.get(
    `${usuario.ENDPOINTS.GETCONTEUDOS}banners_intenacional`
  );
  const fullBanner = banners.data.result.filter((item) => {
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
  return fullBanner;
}
const allBanners = await getBanners();
const partidas = await getMatches();
// console.log(allBanners);
</script>
<style>
.nav-toggle-carroussel-team {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 40px 24%;
  overflow-x: auto;
  gap: 24px;
  filter: drop-shadow(0px 37px 35px #000);
  background-color: var(--dl-color-red-dark);
  position: relative;
  z-index: 1;
  color: var(--dl-color-white);
}
.nav-toggle-carroussel-team button {
  text-transform: uppercase;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
}
.nav-toggle-carroussel-team button:hover,
.nav-toggle-carroussel-team button:focus {
  color: var(--dl-color-primary);
}
.carroussel-news-home.slider {
  padding: 40px 0;
}
.carroussel-news-home.slider .slides-group {
  margin: 0 auto;
}
@media (min-width: 991px) {
  .carroussel-news-home.slider {
    padding: 40px 80px;
  }
}
@media (max-width: 991px) {
  .nav-toggle-carroussel-team {
    padding: 24px;
  }
}
</style>
