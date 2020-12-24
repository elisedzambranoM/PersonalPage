<template>
  <div>
    <div class="d-flex">
      <router-link
        to="/resumen"
        class="link__circle circle-item circle-red d-flex align-items-center justify-content-center mt-3 ml-5"
      >
        MI RESUMEN
      </router-link>
      <router-link
        to="/proyectos"
        class="link__circle circle-item circle-blue d-flex align-items-center justify-content-center mt-3 ml-5"
      >
        MIS PROYECTOS</router-link
      >
      <router-link
        to="/resumen"
        class="link__circle circle-item circle-green d-flex align-items-center justify-content-center mt-3 ml-5"
      >
        HABILIDADES
      </router-link>
    </div>
    <p class="mt-4 ml-5 content-paragraph">
     <strong>&lt;HelloWorld /></strong> Soy Elised, newbie en este mundo del desarrollo web, tengo
      muchos años de trayectoria en el área de Administración y Contabilidad. En
      Marzo 2020, tomé la decisión de darle un giro a mi vida laboral,
      inscribiéndome en un curso de desarrollador de aplicaciones FRONT-END.
      Termine el curso motivada, y con ganas de formar parte de un equipo de
      trabajo, donde pueda profundizar y aplicar los conocimientos adquiridos.
      Mi objetivo en esta nueva etapa laboral es lograr, a mediano plazo,
      desarrollar habilidades que me ayuden a construir software de calidad. En
      esta página podrás conocerme un poco más y como me estoy desenvolviendo en
      esta área.
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
.content-paragraph {
  font-size: 14px;
  padding-right: 25%;
  font-family: "Noticia Text", serif;
  padding-bottom: 9%;
}
</style>
