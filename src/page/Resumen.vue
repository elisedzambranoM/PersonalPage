<template>
  <div>
    <div class="container">
      <NavBar />
      <Titulo/>
    </div>
      <Footer/>
  </div>
</template>

<script>
import NavBar from "../components/main/NavBar";
import Footer from "../components/Footer/Footer";
import Titulo from "../components/resumen/Titulo";

export default {
  name: "Resumen",
  components: {
    NavBar,
    Footer,
    Titulo,
  },
};
</script>

<style scope>


</style>
