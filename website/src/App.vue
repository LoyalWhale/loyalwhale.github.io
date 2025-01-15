<template>
  <div>
    <RouterView></RouterView>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';

  export default {
    name: 'App'
  }
</script>

<style>
  /* Global styles */
html,
body,
#app {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background-color: #000;
  margin: 0;
  padding: 0;
  width: 100vw; /* Full width of the viewport */
  height: 100vh; /* Full height of the viewport */
}
</style>
