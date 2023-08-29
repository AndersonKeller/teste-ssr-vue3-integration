<template>
  <Layout>
    <CarrousselBanner />
    <!--<Carroussel
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
    <!--<nav class="nav-toggle-carroussel-team">
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

<script>
import { defineAsyncComponent } from "vue";
import {
  default as allBanners,
  default as partidas,
} from "./index.page.server.vue";
export default {
  data() {
    return {
      partidas: partidas.data().partidas,
      allBanners: allBanners.data().allBanners,
    };
  },
  components: {
    Layout: defineAsyncComponent(() => import("@/layout/Hub.vue")),
    CarrousselBanner: defineAsyncComponent(() =>
      import("../../ds/components/institucional/CarrousselBanner.vue")
    ),
    NextMatches: defineAsyncComponent(() =>
      import("../../ds/partials/hub/NextMatches.vue")
    ),
  },
};
</script>
