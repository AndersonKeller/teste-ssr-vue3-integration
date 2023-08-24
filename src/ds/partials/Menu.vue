<template>
  <div class="menu">
    <button class="btn-teste" @click="setName('oi')">CLOSE{{ result }}</button>
  </div>
</template>
<script setup>
import { result, setName } from "./Menu.client";
</script>
<style>
.btn-teste {
  position: fixed;
  bottom: 300px;
  left: 300px;
  cursor: pointer;
  z-index: 99999999999999999;
}
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
