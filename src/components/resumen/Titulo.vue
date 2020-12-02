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
                <p class="text_font--13">
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
                  Work <br />
                  Experience
                </div>
              </div>
              <div class="col-md-9 d-flex flex-column align-items-start">
                <h6 class="text_font--17 mt-5"><strong>Job position</strong></h6>
                <h6 class="text_font--17"><strong>2010 - Present</strong></h6>
                <p class="text_font--13">
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me and you
                  can start adding your own content and make changes to the
                  font. Feel free to drag and drop me anywhere you like on your
                  page. I’m a great place for you to write more. Tell a story
                  about yourself.
                </p>
                <h6 class="text_font--17 mt-3"><strong>Job position</strong></h6>
                <h6 class="text_font--17"><strong>2010 - Present</strong></h6>
                <p class="text_font--13">
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me and you
                  can start adding your own content and make changes to the
                  font. Feel free to drag and drop me anywhere you like on your
                  page. I’m a great place for you to write more. Tell a story
                  about yourself.
                </p>
                <h6 class="text_font--17 mt-3"><strong>Job position</strong></h6>
                <h6 class="text_font--17"><strong>2010 - Present</strong></h6>
                <p class="text_font--13">
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
                  Eduacation
                </div>
              </div>
              <div class="col-md-9 d-flex flex-column align-items-start">
                <h6 class="text_font--17 mt-5"><strong>University name</strong></h6>
                <h6 class="text_font--17"><strong>2010 - Present</strong></h6>
                <p class="text_font--13">
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me and you
                  can start adding your own content and make changes to the
                  font. Feel free to drag and drop me anywhere you like on your
                  page. I’m a great place for you to write more. Tell a story
                  about yourself.
                </p>
                <h6 class="text_font--17 mt-3"><strong>University name</strong></h6>
                <h6 class="text_font--17"><strong>2010 - Present</strong></h6>
                <p class="text_font--13">
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
              class="circle__item--blue circle-icon d-flex align-items-center justify-content-center mt-3"
            >
              <i class="fas fa-exclamation"></i>
            </div>
            <h6 class="text_font--17  mt-2">Skills</h6>
            <hr />
            <span class="text_font--13">PHOTOSHOP</span><br />
            <span class="text_font--13">FLASH</span> <br />
            <span class="text_font--13">ADD A SKILL</span> <br />
          </div>
          <div class="col-md-12 mt-5">
            <div
              class="circle__item--blue circle-icon d-flex align-items-center justify-content-center mt-3"
            >
              <i class="fas fa-globe"></i>
            </div>
            <h6 class="text_font--17  mt-2">Lenguajes</h6>
            <hr />
            <span class="text_font--13">PHOTOSHOP</span><br />
            <span class="text_font--13">FLASH</span> <br />
            <span class="text_font--13">ADD A SKILL</span> <br />
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
  background-color: #eae5e5 !important;
  color: #8b8b8b !important;
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

.xperience-list li {
  border-top: 1px solid #8b8b8b !important;
}

.circle__item--blue {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  transition: 0.5s;
  background-color: var(--link-color);
  font-size: 17px;
  color: #ffffff;
}
.text_font--17 {
  font-family: "Noticia Text", serif;
  font-size: 17px;
  color: #4d4d4d;
}

hr {
  margin-top: 0px;
  margin-bottom: 0px;
  border: 0;
  border-top: 1px solid #8b8b8b;
}
.text_font--13 {
  font-size: 13px;
  font-family: "Noticia Text", serif;
  color: #4d4d4d;
}
</style>
