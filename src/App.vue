<template>
  <div id="app">
  <PersonalPageHeader/>
  <PersonalPageFooter/>
  </div>
</template>

<script>
import PersonalPageHeader from './components/Header'
import PersonalPageFooter from './components/Footer'



export default {
  name: 'App',
  components: {
    PersonalPageHeader,
    PersonalPageFooter,
    
   
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
}

body{
   background-color: #EAE5E5;
  }
  :root{
    --link-color: #61D0D6;
}
</style>
