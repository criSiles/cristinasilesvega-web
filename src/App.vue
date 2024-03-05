<template>

  <router-view :key="$route.fullPath"/>
</template>

<script>
import { defineComponent } from "vue";
import '../src/assets/main.css'

export default defineComponent({
  name: "App",
  components: {
},
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
