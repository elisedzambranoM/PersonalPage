<template>
  <div class="header--main">
    <div class="row">
      <div class="col-md-12">
        <NavBar />
        <div class="row">
          <div class="col-md-4">
          <ProfilePic />
          </div>
          <div class="col-md-8">
          <Content />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./main/NavBar";
import Content from "./main/Content";
import ProfilePic from "./main/ProfilePic";
export default {
  name: "PersonalPageHeader",
  props: {
    msg: String,
  },
  components: {
    NavBar,
    Content,
    ProfilePic,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header--main {
  background-color: #eae5e5;
}
</style>
