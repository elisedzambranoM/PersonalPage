<template>
  <div class="row no-gutter">
    <div class="col-md-2">
      <div class="footerItem--icon d-flex align-items-center justify-content-center">
      <i :class="icon"></i>
      </div>
    </div>
    <div class="col-md-10 footerItem--title">
      {{title}}
      <h5>{{content}}</h5>
      <div v-if="showIcons == 'true'">
        <a href="https://github.com/elisedzambranoM" target="_blank"><i class="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/elised-zambrano-mart%C3%ADn-ba286911a/" target="_blank"><i class="fab fa-linkedin ml-2"></i></a> 
      </div>
      <div><span class="footerItem--title">{{version}}</span></div>
    </div>  

  </div>
</template>

<script>
export default {
    name:'FooterItem',
    props:{
      title: String,
      icon: String,
      content: String,
      showIcons: String,
      version: String,
    }


}
</script>

<style scope>

.footerItem--icon{
   width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: var(--link-color);
}
.footerItem--icon i{
  color:  #e83556;
  font-size: 30px;
  
}
.footerItem--title{
  color: #ffffff;
  font-family: "Noticia Text", serif;
  font-size: 13px;
  font-weight: bold;
 }
h5{
  font-size: 12px;
  color: #ffffff;
  margin-bottom: 0;
}
.footerItem--title div a i{
  font-size: 20px;
}
.footerItem--title div a:visited i {
  color:#ffffff
}

</style>