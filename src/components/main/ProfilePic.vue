<template>
  <div>
    <img
      :src="foto"
      alt="Profile image"
      class="mt-5 img--profile"
    />
  </div>
</template>

<script>
import foto_perfil from "@/assets/images/foto_perfil.jpg";
export default {
  name: "ProfilePic",

  data(){
    return{
      foto: foto_perfil
    }
  }
};
</script>

<style scoped>
.img--profile {
  border-radius: 192px;
  width: 350px;
}
</style>
