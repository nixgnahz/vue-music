<template>
  <div class="user fixed">
    <Menu></Menu>
    <Songs></Songs>
  </div>
</template>

<script>
  import Menu from './user/Menu.vue'
  import Songs from './user/Songs.vue'
  export default {
    components: {
      Menu,
      Songs
    }
  }
</script>

<style>

</style>
