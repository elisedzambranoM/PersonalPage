<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div
          :id="'carouselExampleControls' + carouselId"
          class="carousel slide carousel__size"
          data-ride="carousel"
          data-interval="false"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="http://lorempixel.com/600/300/food/" alt="..." />
            </div>
            <div class="carousel-item">
              <img
                src="http://lorempixel.com/600/300/sports/"
                class=""
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img src="http://lorempixel.com/600/300/fashion/" alt="..." />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            :href="'#carouselExampleControls' + carouselId"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            :href="'#carouselExampleControls' + carouselId"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselProjects",

  props: {
    carouselId: Number,
  }
};
</script>

<style scoped>
.xperience-list li {
  border-top: 2px solid #8b8b8b !important;
}
.carousel__size{
  width:  500px;
}
</style>
