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
    />
    <NextMatches />
    <nav class="nav-toggle-carroussel-team">
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
console.log(allBanners);
</script>
<style>
button {
  position: fixed;
  bottom: 200px;
  left: 100px;
}
</style>
