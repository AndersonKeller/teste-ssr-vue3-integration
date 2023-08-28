<template>
  <div class="sci-social-medias">
    <a
      href="https://www.instagram.com/scinternacional/"
      target="_blank"
      class="social-link"
    >
      <img :src="instagram" />
    </a>

    <a
      href="https://web.facebook.com/scinternacional"
      target="_blank"
      class="social-link"
    >
      <img :src="facebook" />
    </a>
    <a
      href="https://www.tiktok.com/@scinternacional"
      target="_blank"
      class="social-link"
    >
      <img :src="tiktok" />
    </a>
    <a
      href="https://twitter.com/SCInternacional"
      target="_blank"
      class="social-link"
    >
      <img :src="twitter" />
    </a>
    <a
      href="https://www.youtube.com/@scinternacional"
      target="_blank"
      class="social-link"
    >
      <img :src="youtube" />
    </a>
  </div>
</template>
<script setup>
const props = defineProps({ color: String });
import facebook from "../../assets/icons/white/sci-facebook.svg";
import instagram from "../../assets/icons/white/sci-instagram.svg";
import tiktok from "../../assets/icons/white/sci-tiktok.svg";
import twitter from "../../assets/icons/white/sci-twitter.svg";
import youtube from "../../assets/icons/white/sci-youtube.svg";
</script>
<style scoped>
.sci-social-medias {
  width: 100%;
  height: min-content;
  display: flex;
  justify-content: center;
}
.sci-social-medias .social-link {
  width: auto;
  height: auto;
  display: block;
  margin: 0 4px;
}
.sci-social-medias .social-link img {
  width: 100%;
  height: 100%;
}
@media screen and (max-width: 991px) {
  .sci-social-medias {
    width: 100%;
    justify-content: center;
    margin: 16px 0 0;
  }
  .sci-social-medias .social-link {
    width: 100%;
    height: 100%;
    display: block;
    margin: 0 8px;
  }
  .sci-social-medias .social-link img {
    width: 100%;
    height: 100%;
  }
}
@media screen and (max-width: 1024px) {
  .sci-social-medias {
    margin: auto;
  }
  .social-media {
    margin: 3% auto;
  }
}
@media screen and (max-width: 480px) {
  .sci-social-medias {
    margin: auto;
  }
  .social-media {
    margin: 3% auto;
  }
}
</style>
