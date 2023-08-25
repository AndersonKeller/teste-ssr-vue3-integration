<template>
  <Wrapper>
    <Header />
    <!-- <template v-if="!$util.isApp()">
      
    </template>
    <div class="sci-main-container">
      <slot></slot>
    </div>
    <template v-if="!$util.isApp()">
      <FooterPartners />
      <Footer />
    </template> -->
    <slot></slot>
  </Wrapper>
</template>
<script setup>
import Wrapper from "../ds/components/Wrapper.vue";
// name: "Layout",
import Header from "../ds/partials/layout/Header.vue";
// Header: () => import("@/ds/partials/layout/Header.vue"),
// FooterPartners: () => import("@/ds/partials/layout/Footer-partners.vue"),
// Footer: () => import("@/ds/partials/layout/Footer.vue"),
</script>
<style scope>
.sci-main-container {
  width: 100%;
  min-height: 100vh;
  height: auto;
  padding: 0 0 0 64px;
}
@media screen and (max-width: 991px) {
  .sci-main-container {
    padding: 0;
  }
}
</style>
