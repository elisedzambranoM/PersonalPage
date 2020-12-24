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
          images: [images, images2, images3, images4, images5],
        },
        {
          id: 2,
          titulo: "Project | 02",
          subtitulo: "Gigeo",
          descripcion:
            "I'm a Paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to write more. Tell a story about yourself.",
          images: [images6, images7],
        },
        {
          id: 3,
          titulo: "Project | 03",
          subtitulo: "Tía Tomate",
          descripcion:
            "I'm a Paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to write more. Tell a story about yourself.",
          images: [images8, images9, images10],
        },
        {
          id: 4,
          titulo: "Project | 04",
          subtitulo: "Nasa App",
          descripcion:
            "I'm a Paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to write more. Tell a story about yourself.",
          images: [images11, images12],
        },
        {
          id: 5,
          titulo: "Project | 05",
          subtitulo: "Poke Api",
          descripcion:
            "I'm a Paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to write more. Tell a story about yourself.",
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
