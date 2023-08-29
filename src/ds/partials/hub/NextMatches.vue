<template>
  <div class="next-matchs">
    <div class="lettering">
      <Headline
        type="h4"
        text="Próximas"
        class="word-next"
        color="white"
        font="cursive"
      />
      <Headline
        type="h1"
        text="Jogos"
        class="word-matchs"
        font="cursive"
        color="white"
      />
      <Button
        label="Ver todos"
        type="cta-primary"
        size="cta-regular"
        @click="util.go('Jogos')"
      />
    </div>
    <div class="matchs">
      <Card v-for="(dados, index) in disponivel" :key="index">
        <!-- <MatchInfos type="resume" :match="dados" /> -->
      </Card>
      <Card class="fake-card"></Card>
    </div>
  </div>
</template>

<script setup>
import Util from "../../../controllers/Util.controller";
import Button from "../../components/Button.vue";
import Card from "../../components/Card.vue";
import Headline from "../../components/Headline.vue";
const util = new Util();
</script>
<script>
export default {
  name: "NextMatches",
  props: ["disponivel"],
};
</script>
<style>
.next-matchs {
  background: var(--dl-color-primary);
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 24px 0 24px 24px;
}

.next-matchs .lettering {
  width: 40%;
  text-align: center;
}

.next-matchs .lettering .cta-button {
  margin: 40px auto 0;
}

.next-matchs .lettering h2 {
  color: var(--dl-color-white);
  font-size: 30px;
}

.next-matchs .matchs {
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  border-radius: 10px 0 0 10px;
  overflow: hidden;
}

.next-matchs .matchs .sci-card {
  margin: 0;
  border-radius: 0;
}

.next-matchs .matchs .fake-card {
  margin: 0 -40% 0 0;
}

@media screen and (max-width: 991px) {
  .next-matchs {
    padding: 80px 10%;
  }

  .next-matchs .lettering {
    width: 100%;
  }

  .next-matchs .matchs {
    width: 100%;
    border-radius: 10px;
  }

  .next-matchs .matchs .sci-card {
    display: none;
  }

  .next-matchs .matchs .sci-card:first-child {
    display: block;
  }

  .next-matchs .matchs .fake-card {
    display: none;
  }
}
</style>
