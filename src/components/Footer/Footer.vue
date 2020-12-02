<template>
  <div class="footer--main container-fluid">
    <div class="container">
      <div class="row pt-5 pb-4">
        <FooterItem title="Contacto" content="elised.zambrano@gmail.com" icon="far fa-envelope" class="col-md-4" showIcons="false" />
        <FooterItem title="Sigueme" icon="fas fa-plus" class="col-md-4" showIcons="true" />
        <FooterItem title="Creado Por" content='Elised Zambrano, Con Vue JS' icon="far fa-copyright" class="col-md-4" showIcons="false"/>
        </div>
    </div>
  </div>
</template>

<script>
import FooterItem from "./FooterItem";
export default {
  name: "PersonalPageFooter",
  components: {
    FooterItem,
  },
};
</script>

<style scope>
.footer--main {
  background-color: #e83556;

}
</style>
