<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <agile class="agile">
          <div
            class="slide"
            v-for="(image, index) in imagesCarousel"
            :key="index"
          >
            <img :src="image" alt="" />
          </div>
          <template class="nextButton" slot="prevButton"
            ><i class="fas fa-chevron-left"></i
          ></template>
          <template slot="nextButton"
            ><i class="fas fa-chevron-right"></i
          ></template>
        </agile>
      </div>
    </div>
  </div>
</template>

<script>
import { VueAgile } from "vue-agile";

export default {
  name: "CarouselProjects",

  components: {
    agile: VueAgile,
  },

  data() {
    return {
      perpage: 1,
    };
  },

  props: {
    carouselId: Number,
    imagesCarousel: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.agile > .agile__actions > button{
    background-color: #ffffff00;
    border: none;

}
</style>
