<template>
  <div>
    <div class="container">
      <PersonalPageHeader />
    </div>
      <PersonalPageFooter />
  </div>
</template>

<script>
import PersonalPageHeader from "../components/Header";
import PersonalPageFooter from "../components/Footer/Footer";
export default {
  name: "Home",
  components: {
    PersonalPageHeader,
    PersonalPageFooter,
  },
};
</script>

<style></style>
