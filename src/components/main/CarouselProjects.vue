<template>
<div class="slide">
    <Slider
      animation="fade"
      v-model="sliderValue"
      :duration="5000"
      :speed="1000"
    >
      <SliderItem
        v-for="(i, index) in imagesCarousel"
        :key="index"
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
      sliderValue: 2
    };
  },
  methods: {
    changeIndex(index) {
      this.sliderValue = index;
    }
  },
  mounted() {
    setTimeout(
      () =>
        (this.list = [
          {
            width: "100%",
            height: "100%"
          },
          {          
            width: "100%",
            height: "100%"
          },
          {          
            width: "100%",
            height: "100%"
          },
          {           
            width: "100%",
            height: "100%"
          }
        ]),
      1000
    );
  }
};
</script>

<style>
.slide {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

p {
  margin: 0;
}
