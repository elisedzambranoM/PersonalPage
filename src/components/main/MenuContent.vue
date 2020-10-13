<template>
  <div>
    <div class="d-flex">
      <router-link to="/resumen" class="link__circle circle-item circle-red d-flex align-items-center justify-content-center mt-3 ml-5"
      >
        MI RESUMEN
      </router-link>
      <router-link to="/proyectos" class="link__circle circle-item circle-blue d-flex align-items-center justify-content-center mt-3 ml-5"
      >
      MIS PROYECTOS</router-link>
      <router-link to="/resumen" class="link__circle circle-item circle-green d-flex align-items-center justify-content-center mt-3 ml-5">
       HABILIDADES
      </router-link>
    </div>
    <p class="mt-4 ml-5 content-paragraph">
      I'm a paragraph. Click here to add your own text and edit me. It’s easy.
      Just click “Edit Text” or double click me and you can start adding your
      own content and make changes to the font. Feel free to drag and drop me
      anywhere you like on your page. I’m a great place for you to write more.
      Tell a story and let your users get to know you.
    </p>
  </div>
</template>

<script>
export default {
  name: "MenuContent",
};
</script>

<style scoped>
.circle-item {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  transition: 0.5s;
}
.circle-red {
  background-color: #e83556;
}
.link__circle {
  color: #ffffff !important;
  font-family: "Noticia Text", serif;
  font-size: 13px;
  text-decoration: none;
}
.circle-red:hover {
  background-color: #9e2239;
}
.circle-blue {
  background-color: var(--link-color);
}
.circle-blue:hover {
  background-color: #69a1a3;
}
.circle-green {
  background-color: #d1c926;
}
.circle-green:hover {
  background-color: #837e1e;
}
.content-paragraph{
  font-size: 13px;
  padding-right: 25%;
}
</style>
