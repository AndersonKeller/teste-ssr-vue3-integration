<template>
  <div class="div-container__slide__banners">
    <div class="div-banners__slide banner-img-1">
      <img
        class="imgs__slide__banner"
        :src="img_banners[0]?.subtitulo.desktop"
      />
    </div>

    <div class="div-banners__slide banners_rest">
      <img
        class="imgs__slide__banner"
        :src="img_banners[1]?.subtitulo.desktop"
      />
    </div>

    <div class="div-banners__slide banners_rest">
      <img
        class="imgs__slide__banner"
        :src="img_banners[2]?.subtitulo.desktop"
      />
    </div>
  </div>
</template>
<script setup>
//@click="$util.go(img_banners[0].link)"

const props = defineProps({
  img_banners: [],
});

console.log(props.img_banners);
</script>
<style scoped>
.div-container__slide__banners {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 550px;
  background: rgba(255, 255, 255, 0.4);
  overflow: hidden;
  /* box-shadow: 0 0.4rem 1.2rem 0 rgba(0,0,0,.4); */
}
.imgs__slide__banner {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: flex;
}
.div-banners__slide {
  display: flex;
  flex-wrap: wrap;
  width: 33%;
  height: 100%;
}
.div-banners__slide,
.imgs__slide__banner {
  flex-wrap: wrap;
  display: flex;
  transition: box-shadow 0.3s ease;
}
.div-container__slide__banners .div-banners__slide {
  display: flex;
  flex: 1;
  transition: all 0.5s;
}
.div-container__slide__banners .div-banners__slide:hover {
  flex: 3;
}
.div-container__slide__banners .div-banners__slide .imgs__slide__banner {
  transition: all 0.5s;
}
.div-container__slide__banners .div-banners__slide:hover .imgs__slide__banner {
  transform: rotate(0);
}
/* .div-banners__slide, .imgs__slide__banner:hover {
        box-shadow: 0 0 10px #000;    
        transform: scale(1.06);
        transition: transform .3s;   
        /* transition: width 2s, height 4s;
        width: 60%; 
        flex: 4;
        transform: rotate(-90deg);
        transition: all .5s;
    }  */
@media screen and (max-width: 1025px) {
  .div-container__slide__banners {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
  }
  .imgs__slide__banner {
    width: 100%;
    object-fit: cover;
    display: flex;
  }
  .div-banners__slide {
    display: flex;
    flex-wrap: wrap;
  }
  .div-banners__slide.banner-img-1 {
    display: flex;
    flex-wrap: wrap;
    min-width: 100%;
    height: 50%;
  }
  .div-banners__slide.banners_rest {
    display: flex;
    flex-wrap: wrap;
    min-width: 50%;
    height: 50%;
  }
  .div-banners__slide,
  .imgs__slide__banner:hover {
    transform: none;
  }
  .div-container__slide__banners .div-banners__slide:hover {
    flex: 1;
  }
}
@media screen and (max-width: 480px) {
  .div-container__slide__banners {
    display: flex;
    flex-wrap: wrap;
  }
  .div-container__slide__banners .div-banners__slide {
    transition: none;
  }
  .div-container__slide__banners {
    display: flex;
    flex-wrap: wrap;
  }
  .div-banners__slide {
    display: flex;
    flex-wrap: wrap;
  }
  .div-banners__slide.banner-img-1 {
    min-width: 100%;
    height: 50%;
  }
  .div-banners__slide.banners_rest {
    min-width: 50%;
    height: 50%;
  }
  .div-container__slide__banners .div-banners__slide:hover {
    flex: 1;
  }
}
</style>
