<template>
  <div>
    <div class="container">
      <Header />
    </div>
      <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
export default {
  name: "Home",
  components: {
    Header,
    Footer,
  },
};
</script>

<style></style>
