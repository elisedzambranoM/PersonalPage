<template>
  <div>
    <div class="container">
      <NavBar />
      <Footer />
    </div>
  </div>
</template>

<script>
import NavBar from "../components/main/NavBar";
import Footer from "../components/Footer/Footer";

export default {
    name: 'Proyectos',
    components:{
        NavBar,
        Footer
    }
};
</script>

<style></style>
