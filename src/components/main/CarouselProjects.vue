<template>
<div class="slide">
    <Slider
      animation="fade" 
      :autoplay="autoplay"       
    >
      <SliderItem
        v-for="(i, index) in imagesCarousel"
        :key="index+i"
        @click="changeIndex(1);"
        :style="i"
      >
      <img :src="i" alt="" />
    </SliderItem>
    </Slider>
</div>
</template>

<script>

import { Slider, SliderItem } from "vue-easy-slider";


export default {
  name: "CarouselProjects",
 
components: {
    Slider,
    SliderItem
  },
props: {
   imagesCarousel: {
    type: Array,
   }
  },

  data() {
    return {
      list: [],
      autoplay: false
      
    };
  },
  methods: {
    changeIndex(index) {
      this.sliderValue = index;
    }
  },

};
</script>

<style scoped>

.slide {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  }

p {
  margin: 0;
}
</style>