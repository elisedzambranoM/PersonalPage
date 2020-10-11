<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 mt-5 ml-5">
        <span class="title-content">Hola,</span> <br />
        <span class="subtitle-content">Un poco sobre mí:</span>
      </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <MenuContent/>
        </div>
    </div>
  </div>
</template>

<script>
import MenuContent from "./MenuContent";

export default {
  name: "Content",
  components: {
    MenuContent,
  },
};
</script>

<style scoped>
.title-content {
  font-size: 5rem;
  font-weight: bold;
  font-family: "Noticia Text", serif;
  color: #4d4d4d;
}
.subtitle-content {
  font-family: "Noticia Text", serif;
  font-size: 2rem;
  color: #4d4d4d;
}
</style>
