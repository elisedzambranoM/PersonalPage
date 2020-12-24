<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 mb-4">
        <div
          class="circle-item circle-blue text__circle d-flex align-items-center justify-content-center"
        >
         {{ title}}
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h6 class="text_font--17">{{subtitle}}</h6>
        <p class="text_font--13 mt-4">
        {{description}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectResume",

  props: {
  title: String,
  subtitle: String,
  description: String,
  }
};
</script>

<style scoped>
.circle-blue {
  background-color: var(--link-color);
}
.circle-item {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  transition: 0.5s;
}
.text__circle {
  color: #ffffff !important;
  font-family: "Noticia Text", serif;
  font-size: 15px;
  text-decoration: none;
}
.text_font--17 {
  font-family: "Noticia Text", serif;
  font-size: 17px;
  color: #4d4d4d;
}
.text_font--13 {
  font-size: 14px;
  font-family: "Noticia Text", serif;
  color: #4d4d4d;
}
</style>
