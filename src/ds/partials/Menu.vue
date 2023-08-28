<template>
  <div class="menu" @click="(e) => closeAll(e)">
    <img
      src="@/assets/icons/sci-nav.svg"
      class="nav-icon-mobile"
      @click="toggle_nav"
    />
    <div
      id="nav-sidebar"
      :class="['nav-sidebar', { visible: NavVisible }]"
      v-on:mouseleave="leave"
    >
      <img
        src="@/assets/icons/sci-close.svg"
        @click="toggle_nav"
        :class="['nav-close-icon-mobile', { visible: NavVisible }]"
      />
      <Link class="sci-logo" href="/">
        <img
          alt="logo"
          :src="config.dados.logoNavBar"
          class="sci-logo-desktop"
        />
      </Link>
      <div class="nav-list">
        <div class="nav-group">
          <div class="nav-trigger" @click="openNav(0)">
            <div class="nav-title">
              <div class="icon">
                <img src="@/assets/icons/sci-matchs.svg" class="icon-image" />
              </div>
              Futebol
            </div>
          </div>
          <div class="nav-sub">
            <Link class="nav-link" href="/">Próximos jogos</Link>
            <Link class="nav-link" href="/">Jogos anteriores</Link>
            <Link class="nav-link" href="/">Equipes</Link>
          </div>
        </div>
        <div class="nav-group">
          <!-- v-if="$util.isFeatureEnabled(feature_flags.GAMIFICATION)" -->
          <div class="nav-trigger" @click="openNav(1)">
            <div class="nav-title">
              <div class="icon">
                <img
                  src="@/assets/icons/sci-experiences.svg"
                  class="icon-image"
                />
              </div>
              Experiências
            </div>
            <div class="icon-nav"></div>
          </div>

          <div class="nav-sub">
            <!-- v-if="$util.isFeatureEnabled(feature_flags.GAMIFICATION)" -->
            <Link class="nav-link" href="/">Extrato</Link>
            <Link class="nav-link" href="/">Ganhe pontos</Link>
            <Link class="nav-link" href="/">Resgates</Link>
            <Link class="nav-link" href="/">Mais informações</Link>
          </div>
        </div>
        <Link class="nav-link" href="/">
          <div class="nav-title">
            <div class="icon">
              <img src="@/assets/icons/sci-benefits.svg" class="icon-image" />
            </div>
            Benefícios
          </div>
        </Link>
        <div class="nav-group">
          <div class="nav-trigger" @click="openNav(2)">
            <div class="nav-title">
              <div class="icon">
                <img src="@/assets/icons/sci-ott.svg" class="icon-image" />
              </div>
              Conteúdos
            </div>
            <div class="icon-nav"></div>
          </div>

          <div class="nav-sub">
            <Link class="nav-link" href="/">Galeria</Link>
            <Link class="nav-link" href="/">Notícias</Link>
            <Link class="nav-link" href="/">Vídeos</Link>
          </div>
        </div>
        <div class="nav-group">
          <div class="nav-trigger" @click="openNav(3)">
            <div class="nav-title">
              <div class="icon">
                <img src="@/assets/icons/sci-plans.svg" class="icon-image" />
              </div>
              <!-- {{ this.$root.isSocio ? "Planos" : "Associe-se" }} -->
              Planos
            </div>
            <div class="icon-nav"></div>
          </div>

          <div class="nav-sub">
            <Link class="nav-link" href="/">Planos</Link>
            <Link class="nav-link" href="/">Cadeira Locada</Link>
          </div>
        </div>
        <div class="nav-group">
          <div class="nav-trigger" @click="openNav(4)">
            <div class="nav-title">
              <div class="icon">
                <img src="@/assets/icons/sci-club.svg" class="icon-image" />
              </div>
              Clube
            </div>
            <div class="icon-nav"></div>
          </div>

          <div class="nav-sub">
            <Link class="nav-link" href="/">Sobre o Clube</Link>
            <Link class="nav-link" href="/">Estrutura</Link>
            <Link class="nav-link" href="/">Diretoria</Link>
            <Link class="nav-link" href="/">Projetos Colorados</Link>
            <Link href="" class="nav-link">Portal de Transparência</Link>
            <Link
              href="https://api.whatsapp.com/send?l=pt_BR&phone=55051981147779"
              target="_blank"
              class="nav-link"
              >Canal de denúncias</Link
            >
          </div>
        </div>
        <Link class="nav-link" href="/">
          <div class="nav-title">
            <div class="icon">
              <img src="@/assets/icons/sci-club.svg" class="icon-image" />
            </div>
            Atendimento
          </div>
        </Link>
        <!-- <Radio /> -->
        <div class="social-media">
          <SocialMedias color="white" />
        </div>
      </div>
    </div>
    <div :class="['nav-mobile-layer', { visible: NavVisible }]"></div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Link from "../../../renderer/Link.vue";

import Config from "../../controllers/Config.controller";
import SocialMedias from "../components/SocialMedias.vue";
const config = new Config();
const NavVisible = ref(false);

function toggle_nav() {
  console.log("toggle");
  NavVisible.value = !NavVisible.value;
}
function openNav(index) {
  // if (
  //   index >= 1 &&
  //   !this.$util.isFeatureEnabled(this.feature_flags.GAMIFICATION)
  // ) {
  //   index -= 1;
  // }
  const navs = Array.from(document.getElementsByClassName("nav-sub"));
  const filterNavs = navs.filter((nav) => navs.indexOf(nav) != index);
  filterNavs.forEach((nav) => nav.classList.remove("open"));

  let icones = Array.from(document.getElementsByClassName("icon-nav"));
  const filterIcons = icones.filter((nav) => icones.indexOf(nav) != index);
  filterIcons.forEach((icon) => icon.classList.remove("icon-nav-close"));
  let groups = Array.from(document.getElementsByClassName("nav-group"));
  const filterGroups = groups.filter((group) => groups.indexOf(group) != index);
  filterGroups.forEach((group) => group.removeAttribute("style"));
  document.getElementsByClassName("nav-sub")[index].classList.toggle("open");
  document
    .getElementsByClassName("icon-nav")
    [index].classList.toggle("icon-nav-close");

  let group = document.getElementsByClassName("nav-group")[index];
  group.hasAttribute("style")
    ? group.removeAttribute("style")
    : group.setAttribute("style", "background-color: rgba(0, 0, 0, 0.1)");
}
function closeAll(e) {
  if (
    e.target.classList[0] != "nav-trigger" &&
    e.target.classList[0] != "icon-nav" &&
    e.target.classList[0] != "icon-image" &&
    e.target.classList[0] != "nav-title" &&
    e.target.classList[0] != "icon" &&
    e.target.classList[0] != undefined
  ) {
    let nav = Array.from(document.getElementsByClassName("nav-sub"));
    let icones = Array.from(document.getElementsByClassName("icon-nav"));
    let group = Array.from(document.getElementsByClassName("nav-group"));
    for (let index = 0; index < group.length; index++) {
      nav[index].classList.remove("open");
      icones[index].classList.remove("icon-nav-close");
      group[index].removeAttribute("style");
    }
  }
}
function leave() {
  console.log("mouse");
  let nav = Array.from(document.getElementsByClassName("nav-sub"));
  let icones = Array.from(document.getElementsByClassName("icon-nav"));
  let group = Array.from(document.getElementsByClassName("nav-group"));

  for (let index = 0; index < group.length; index++) {
    nav[index]?.classList.remove("open");
    icones[index]?.classList.remove("icon-nav-close");
    group[index].removeAttribute("style");
  }
}
</script>
<style>
.menu {
  width: 100vw;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
}

.nav-sidebar {
  background-color: var(--dl-color-primary);
  width: 65px;
  height: 100vh;
  z-index: 100;
  top: 0;
  left: 0;
  position: fixed;
  transition: 0.5s;
  padding: 12px 0 80px;
  box-shadow: 0px 0px 30px rgb(0 0 0 / 24%);
}

.nav-sidebar:hover {
  width: 310px;
  overflow: hidden;
  overflow-y: auto;
}

.nav-sidebar .sci-logo {
  display: flex;
  align-items: center;
}

.nav-sidebar .sci-logo .sci-logo-desktop {
  margin-left: 20px;
  width: 80px;
  height: auto;
}

.nav-sidebar .nav-list {
  padding: 0px;
  width: 65px;
  margin: 15px 0;
  transition: 0.5s;
  overflow: hidden;
}

.nav-sidebar:hover .nav-list {
  width: 310px;
}

.nav-sidebar .nav-list .nav-link:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.nav-sidebar .nav-list .nav-link,
.nav-sidebar .nav-list .nav-group .nav-trigger {
  width: 310px;
  height: auto;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--dl-color-white);
  margin: 0;
  font-size: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
  transition: 0.5s;
  text-decoration: none;
}
.nav-sidebar .nav-list .nav-group .nav-trigger:hover {
  background-color: rgba(255, 255, 255, 0.05);
}
.nav-sidebar .nav-list .nav-group .nav-link {
  padding: 10px 20px;
}

.nav-sidebar .nav-list .nav-link .icon,
.nav-sidebar .nav-list .nav-group .nav-trigger .icon {
  width: 30px;
  height: 30px;
  margin: 0 16px 0 0;
  padding: 4px;
  display: flex;
  justify-content: center;
}

.nav-sidebar .nav-list .nav-link .icon .icon-image,
.nav-group .nav-trigger .icon .icon-image {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
}

.nav-sidebar .social-media {
  width: 60%;
  height: 12px;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 8px;
  border-radius: 30px;
  margin: auto;
}

.nav-sidebar:hover .social-media {
  height: 40px;
}

.nav-title {
  display: flex;
  align-items: center;
  font-size: 10px;
}

.icon-nav {
  background-image: url("../../assets/icons/arrow-down-white.svg");
  width: 10px;
  height: 10px;
}

.icon-nav-close {
  background-image: url("../../assets/icons/arrow-up-white.svg");
}

.nav-group .nav-sub {
  max-height: 0;
  padding: 0;
  overflow: hidden;
  transition: max-height 0.5s linear;
}

.nav-group .open {
  max-height: 500px;
  transition: max-height 0.5s linear;
  overflow: visible;
}

.nav-sidebar .nav-list .nav-group .nav-sub .nav-link {
  padding: 20px 24px 20px 64px;
  height: auto;
}

.nav-icon-mobile,
.nav-close-icon-mobile {
  display: none;
}

.nav-close-icon {
  width: 65px;
  height: 65px;
  left: 0;
  top: 0;
  z-index: 103;
  display: flex;
  justify-content: flex-end;
  padding: 30px;
  width: auto;
}

.nav-close-icon img {
  width: 20px;
  height: 20px;
}

.nav-layer,
.nav-mobile-layer {
  background-color: var(--dl-color-red-dark);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.8;
}

.nav-layer {
  z-index: 101;
  display: none;
}

.nav-layer.visible {
  display: block;
}

.nav-mobile-layer {
  z-index: 98;
  display: none;
}

@media screen and (max-width: 991px) {
  .menu {
    width: auto;
    height: auto;
    position: relative;
    width: 24%;
    z-index: 9;
  }

  .nav-icon-mobile {
    width: 30px;
    height: auto;
    margin-bottom: 10px;
  }

  .nav-icon-mobile,
  .nav-close-icon-mobile {
    padding: 8px;
    width: 38px;
    height: 38px;
    display: flex;
    margin: auto;
    background-color: red;
    border-radius: 50%;
  }

  .nav-sidebar {
    width: 310px;
    left: -350px;
    overflow-y: auto;
    overflow-x: hidden;
    padding-top: 32px;
    padding-bottom: 130px;
  }

  .nav-sidebar.visible {
    left: 0;
  }

  .nav-sidebar .sci-logo {
    display: none;
  }

  .nav-sidebar .nav-list {
    width: 310px;
  }

  .nav-close-icon-mobile {
    position: absolute;
    position: fixed;
    transition: 0.5s;
    right: -100px;
  }

  .nav-close-icon-mobile.visible {
    right: 16px;
    top: 10;
    transition: 0.5s;
  }

  .nav-mobile-layer.visible {
    display: flex;
  }
}
@media screen and (max-width: 1024px) {
  .nav-sidebar .social-media {
    margin: 4% auto;
    height: 35px;
  }
}
@media (max-width: 600px) {
  .nav-list-history .nav-link {
    width: max-content;
  }
}
@media screen and (max-width: 480px) {
  .nav-sidebar .social-media {
    margin: 4% auto;
  }
}
</style>
