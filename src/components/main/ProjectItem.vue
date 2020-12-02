<template>
  <div>
    <div class="dropdown-divider project__divider"></div>
    <div class="row">
      <div class="col-md-6 mb-4 mt-4">
        <carousel-projects :carouselId="idProject"/>
      </div>
      <div class="col-md-6 mb-4 mt-4">
        <project-resume
          :title="title2"
          :subtitle="subtitle2"
          :description="description2"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CarouselProjects from "./CarouselProjects.vue";
import ProjectResume from "./ProjectResume.vue";

export default {
  name: "ProjectItem",
  components: {
    CarouselProjects,
    ProjectResume,
  },
  props: {
    title2: String,
    subtitle2: String,
    description2: String,
    idProject: Number,
  },
};
</script>

<style scoped>
.project__divider {
  border-top: 1px solid #8b8b8b !important;
}</style
>>
