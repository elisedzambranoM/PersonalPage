<template>
  <div>
    <div class="container">
      <NavBar />
      <div class="col-md-12 title_main">
        <span class="mt-5">MIS PROYECTOS</span>
        <div v-for="miProyecto in misProyectos" :key="miProyecto.id">
          <project-item
            :title2="miProyecto.titulo"
            :subtitle2="miProyecto.subtitulo"
            :description2="miProyecto.descripcion"
            :gitHubUrl="miProyecto.url"
            :idProject="miProyecto.id"
            :images2="miProyecto.images"
          />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "../components/main/NavBar";
import Footer from "../components/Footer/Footer";
import ProjectItem from "../components/main/ProjectItem.vue";
import images from "@/assets/images/Otto-klaus1.jpg";
import images2 from "@/assets/images/Otto-klaus2.jpg";
import images3 from "@/assets/images/Otto-klaus3.jpg";
import images4 from "@/assets/images/Otto-klaus4.jpg";
import images5 from "@/assets/images/Otto-klaus5.jpg";
import images6 from "@/assets/images/gigeo1.jpg";
import images7 from "@/assets/images/gigeo2.jpg";
import images8 from "@/assets/images/tiatomate1.jpg";
import images9 from "@/assets/images/tiatomate2.jpg";
import images10 from "@/assets/images/tiatomate3.jpg";
import images11 from "@/assets/images/nasa1.jpg";
import images12 from "@/assets/images/nasa2.jpg";
import images13 from "@/assets/images/poke1.jpg";
import images14 from "@/assets/images/poke2.jpg";
import images15 from "@/assets/images/poke3.jpg";

export default {
  name: "Proyectos",
  components: {
    NavBar,
    Footer,
    ProjectItem,
  },
  data() {
    return {
      misProyectos: [
        {
          id: 1,
          titulo: "Project | 01",
          subtitulo: "Jugueteria Otto Klaus",
          descripcion:
            "El proyecto fue diseñado en base a los requerimientos solicitados en clase, donde una Juguetería ficticia llamada OTTO KLAUS, solicita la creación de un sistema de inventario que permita al usuario loguearse para que a través del sistema pueda agregar, editar y eliminar un juguete. Creado con Vue, y como apoyo para el desarrollo de la interfaz de usuario se utilizó Vuetify. La autenticación del usuario se hizo con Firebase.",
          url: "https://github.com/elisedzambranoM/Otto-klaus",
          images: [images, images2, images3, images4, images5],
        },
        {
          id: 2,
          titulo: "Project | 02",
          subtitulo: "Gigeo",
          descripcion:
            "Gigeo App es una simulación de una plataforma de video, la cual partiendo de un mockup, se solicitó desarrollar una maqueta en HTML y CSS,  se creó la estructura del proyecto en Sass basado en el patrón 7-1, se utilizó Bootstrap como framework para el diseño del front, además se creó la estructura del HTML usando como sistema de nomenclatura la metodología BEM. La maqueta fue diagramada responsive, funciona tanto para aplicaciones mobiles como desktop.",
          url: "https://github.com/elisedzambranoM/Gigeo-App",
          images: [images6, images7],
        },
        {
          id: 3,
          titulo: "Project | 03",
          subtitulo: "Tía Tomate",
          descripcion:
            "En esta aplicación ficticia, partiendo de un mockup, se realizó el diseño de una maqueta en HTML y CSS, con una estructura de proyecto basada en Sass,solo se trabajó en la versión de la página ACERCA DE.",
          url: "https://github.com/elisedzambranoM/Tiatomate",
          images: [images8, images9, images10],
        },
        {
          id: 4,
          titulo: "Project | 04",
          subtitulo: "Nasa App",
          descripcion:
            "Proyecto creado como práctica, usando como framework Vue y Vuetify. Consta de una vista principal que te permite loguearte, al hacerlo pasas a una siguiente vista, en la que se puede observar un calendario, al momento de seleccionar una fecha la imagen y la descripción de esta cambian, según el día seleccionado. La autenticación del usuario se hizo con firebase, para navegar a través de las páginas se uso el router de VUE.",
          url: "https://github.com/elisedzambranoM/Nasa-demo",
          images: [images11, images12],
        },
        {
          id: 5,
          titulo: "Project | 05",
          subtitulo: "Pokedex",
          descripcion:
            "Se construyó una página web estática, que permitiera a los usuarios conocer información acerca de los pokemones, cuenta con un input que al introducir el número de un pokemon y clickear el botón de buscar, consulta a la pokeapi (la consulta se realizó con ajax) y trae información como la foto frontal, nombre y peso, además de las habilidades y movimientos, las cuales se muestra en un gráfico que se integro usando un plugins de CANVAS js.",
          url: "https://github.com/elisedzambranoM/Pokedex",
          images: [images13, images14, images15],
        },
      ],
    };
  },
};
</script>

<style scoped>
.title_main {
  margin-top: 50px;
}
</style>
