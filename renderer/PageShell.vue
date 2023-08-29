<template>
  <!-- <div class="navigation">
      <a href="/" class="logo">
        <img src="./logo.svg" height="64" width="64" alt="logo" />
      </a>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </div> -->
  <slot />
</template>

<script setup></script>

<style>
body {
  margin: 0;
  font-family: sans-serif;
}
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
</style>

<style scoped>
.layout {
  display: flex;
  max-width: 900px;
  margin: auto;
}
.content {
  border-left: 2px solid #eee;

  min-height: 100vh;
}
</style>
