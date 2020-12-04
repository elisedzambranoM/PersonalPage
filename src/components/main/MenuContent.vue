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
      Hola me presento soy Elised, soy una persona dinámica, versátil y
      confiable. Tengo muchos años trabajando en el área de administración y
      contabilidad, y desde hace unos meses atrás, tomé la decisión de darle un
      giro a mi vida laboral, por lo que decidí inscribirme en un curso de
      Front-End dictado por EDUTECNO, ya que me llama la atención el diseño de
      interfaces de usuarios. Soy newbie en este mundo de la informática, aun
      así, tengo la mayor disposición de todas para aprender y desarrollar mi
      perfil profesional como desarrolladora. Me siento con la confianza de
      afrontar este nuevo reto, ya que, en mis 10 años de experiencia laboral,
      me he topado con circunstancias retadoras que me exigieron evolucionar.
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
  font-size: 13px;
  padding-right: 25%;
  font-family: "Noticia Text", serif;
  padding-bottom: 9%;
}
</style>
