<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <span class="mt-5 border-bottoms">RESUMEN</span>
    </div>
    </div>
    <div class="row">
      <div class="col-md-10">
        <ul class="list-group xperience-list list-group-flush">
          <li class="list-group-item">
            <div class="row">
              <div class="col-md-3">
                <div
                  class=" circle__item--red circle-title d-flex align-items-center justify-content-center mt-3 ml-5"
                >
                  Info <br />
                  Profesional
                </div>
              </div>
              <div class="col-md-9 d-flex align-items-end">
                <p>
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me and you
                  can start adding your own content and make changes to the
                  font. Feel free to drag and drop me anywhere you like on your
                  page. I’m a great place for you to write more. Tell a story
                  about yourself.
                </p>
              </div>
            </div>
          </li>
           <li class="list-group-item">
            <div class="row">
              <div class="col-md-3">
                <div
                  class=" circle__item--red circle-title d-flex align-items-center justify-content-center mt-3 ml-5"
                >
                  Info <br />
                  Profesional
                </div>
              </div>
              <div class="col-md-9 d-flex align-items-end">
                <p>
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me and you
                  can start adding your own content and make changes to the
                  font. Feel free to drag and drop me anywhere you like on your
                  page. I’m a great place for you to write more. Tell a story
                  about yourself.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="col-md-2">
        <div class="row">
          <div class="col-md-12">
            <div
              class="circle__item--blue circle-icon d-flex align-items-center justify-content-center mt-3 ml-5"
            > <i class="fas fa-exclamation"></i></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Titulo",
};
</script>

<style scope>
span {
  color: #4d4d4d;
  font-family: "Noticia Text", serif;
  font-size: 80px;
}
li {
  background-color: #EAE5E5 !important;
  color: #BBB8B8 !important;

}

.circle-title {
  color: #ffffff !important;
  font-family: "Noticia Text", serif;
  font-size: 17px;
  text-decoration: none;
}
.circle__item--red {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  transition: 0.5s;
   background-color: #e83556;
}
div p {
  font-size: 13px;
  font-family: "Noticia Text", serif;
  color: #4d4d4d;
}

.xperience-list li{
    border-top: 2px solid #BBB8B8 !important;
}

.circle__item--blue {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  transition: 0.5s;
  background-color: var(--link-color);
  font-size: 17px;
  color: #ffffff 
}
</style>
