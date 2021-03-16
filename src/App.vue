<template>
  <div id="app">
    <app-blogs></app-blogs>
  </div>
</template>

<script>
import blogs from './components/Blogs.vue';
export default {
  name: 'App',
  components: {
   'app-blogs':blogs
  }
}
</script>

<style>

</style>
