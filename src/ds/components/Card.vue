<template>
  <div :class="['sci-card', cardSize, { isFlex: flex }]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["size", "align", "flex"],
  data() {
    return {
      cardSize: "",
    };
  },
  mounted() {
    this.cardSize = "w-" + this.size;
  },
};
</script>

<style>
.sci-card {
  background-color: #ffffff;
  width: 100%;
  height: auto;
  padding: 32px 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgb(0 0 0 / 15%);
  margin: 0 0 24px;
  overflow: hidden;
}
.sci-card.w-10 {
  width: 10%;
}
.sci-card.w-20 {
  width: 23%;
}
.sci-card.w-30 {
  width: 33%;
}
.sci-card.w-40 {
  width: 39%;
}
.sci-card.w-50 {
  width: 49%;
}
.sci-card.w-60 {
  width: 59%;
}
.sci-card.w-70 {
  width: 69%;
}
.sci-card.w-80 {
  width: 79%;
}
.sci-card.w-90 {
  width: 89%;
}
.sci-card.w-100 {
  width: 100%;
}
.sci-card.isFlex {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}
@media screen and (max-width: 991px) {
  .sci-card.w-10,
  .sci-card.w-20,
  .sci-card.w-30,
  .sci-card.w-40,
  .sci-card.w-50,
  .sci-card.w-60,
  .sci-card.w-70,
  .sci-card.w-80,
  .sci-card.w-90,
  .sci-card.w-100 {
    width: 100%;
    margin: 0 0 24px;
  }
}
@media (max-width: 380px) {
  .sci-card {
    padding: 32px 14px;
  }
}
</style>
