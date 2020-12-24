<template>
  <nav class="navbar navbar-expand-lg navbar--main">
  <div class="d-flex flex-column">
  <h1 class="title--main">Elised Zambrano</h1>
  <h1 class="subtitle--main" >Font-End Jr.</h1>
  </div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse d-flex ml-5" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <router-link to="/" class="nav-link" href="#">HOME<span class="sr-only">(current)</span></router-link>
      <router-link to="/resumen" class="nav-link" href="#">RESUMEN</router-link>
      <router-link to="/proyectos" class="nav-link" href="#">PROYECTOS</router-link>
     
    </div>
  </div>
</nav>
</template>

<script>
export default {
name: 'NavBar'
}
</script>

<style scoped>

.navbar--main{
    color: #4D4D4D;
    font-family: 'Noticia Text', serif;
}
.title--main{
    font-weight: bold;
    font-size: 50px;
}
.subtitle--main{
    font-size: 25px;
    font-weight: bold;
}
.navbar-nav a{
   color: #4D4D4D !important;
   text-decoration: none;
   font-weight: bold;
  }
  .navbar-nav a:hover{
      color: var(--link-color) !important;
      transition: 0.5s;
  }
.navbar-nav a:active{
    color: var(--link-color) !important;
    }
    .nav-link{
      font-size: 15px;
    }


</style>

