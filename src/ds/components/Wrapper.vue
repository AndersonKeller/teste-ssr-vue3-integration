<template>
  <div class="sci-wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Wrapper",
};
</script>

<style scoped>
.sci-wrapper {
  background-color: var(--dl-color-white);
  width: 100%;
  height: auto;
  margin: auto;
  position: relative;
}

@media screen and (max-width: 991px) {
}
</style>
