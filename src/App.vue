<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import router from './components/router.js'

export default {
  name: 'App',
  router,
  components: {}
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
body {
  margin: 0;
  padding: 0;
}
@font-face {
  font-family: "Quicksand Light";
  src: url("./assets/fonts/Quicksand_Light.otf");
}
</style>
