<template>
  <header class="sci-header">
    <a class="sci-logo" @click="util.go('/')">
      <img
        alt="logo"
        :src="config.dados.mundoColorado"
        class="sci-logo-mobile"
      />
    </a>
  </header>

  <Menu />

  <!-- <header class="sci-header" v-if="!$util.isApp()">
    <a class="sci-logo" @click="$util.go('/')">
      <img
        alt="logo"
        :src="$config.dados.mundoColorado"
        class="sci-logo-mobile"
      />
    </a>

    <MenuContext v-if="menus" :menus="menus" />
    <div v-else></div>

    <HeaderUser /> -->
</template>

<script setup>
import Config from "../../../controllers/Config.controller";
import Util from "../../../controllers/Util.controller";
const config = new Config();
const util = new Util();

import Menu from "../../partials/Menu.vue";

// export default {
//   name: "Header",
//   props: ["menus"],
//   components: {
//     Menu: () => import("@/ds/partials/Menu.vue"),
//     MenuContext: () => import("@/ds/partials/Menu-context.vue"),
//     HeaderUser: () => import("@/ds/components/Header-user.vue"),
//   },
//   mounted() {
//     document.body.style.setProperty("--positionSAC", "130px");
//     document.body.style.setProperty("--positionCookies", "74px");
//   },
// };
</script>

<style scoped>
.sci-header {
  width: calc(100% - 64px);
  height: 110px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: -webkit-linear-gradient(
    top,
    rgba(38, 27, 28, 0.7),
    rgba(38, 27, 28, 0)
  );
  background-image: -moz-linear-gradient(
    top,
    rgba(38, 27, 28, 0.7),
    rgba(38, 27, 28, 0)
  );
  background-image: -o-linear-gradient(
    top,
    rgba(38, 27, 28, 0.7),
    rgba(38, 27, 28, 0)
  );
  background-image: linear-gradient(
    to bottom,
    rgba(38, 27, 28, 0.7),
    rgba(38, 27, 28, 0)
  );
  margin: 0 0 0 64px;
  padding: 0 0 0 80px;
}
.sci-header .sci-logo {
  display: none;
}
.sci-header .sci-controls {
  width: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media screen and (max-width: 991px) {
  .sci-header {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    position: fixed;
  }
  .sci-header .sci-logo {
    width: 40%;
    height: auto;
    display: block;
    margin: 0px auto;
  }
  .sci-header .sci-logo .sci-logo-mobile {
    width: 60%;
  }
  img.sci-logo-mobile {
    margin: 0 auto;
  }
}
</style>
