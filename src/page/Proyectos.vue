<template>
  <div>
    <div class="container">
      <NavBar />
      <div class="col-md-12">
        <span class="mt-5">MIS PROYECTOS</span>
      
        <div v-for="miProyecto in misProyectos" :key="miProyecto.id">
          <project-item
            :title2="miProyecto.titulo"
            :subtitle2="miProyecto.subtitulo"
            :description2="miProyecto.descripcion"
          
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
          subtitulo: "Project | 01 title",
          descripcion:
            "I'm a Paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to write more. Tell a story about yourself.",
        },
        {
          id: 2,
          titulo: "Project | 02",
          subtitulo: "Project | 02 title",
          descripcion:
            "I'm a Paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to write more. Tell a story about yourself.",
        },
        {
          id: 3,
          titulo: "Project | 03",
          subtitulo: "Project | 03 title",
          descripcion:
            "I'm a Paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to write more. Tell a story about yourself.",
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
