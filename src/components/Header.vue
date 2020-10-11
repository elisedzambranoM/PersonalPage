<template>
  <div class="container header--main">
    <div class="row">
      <div class="col-md-12">
        <NavBar/>
        <div class="d-flex">
        <ProfilePic/>
        <Content/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './main/NavBar'
import Content from './main/Content'
import ProfilePic from './main/ProfilePic'
export default {
  name: 'PersonalPageHeader',
  props: {
    msg: String
  },
  components: {
    NavBar,
    Content,
    ProfilePic,
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header--main{
  background-color: #EAE5E5;
}

</style>
