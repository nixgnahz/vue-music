<template>
  <div id="app">
    <NavBar></NavBar>
    <MiniPlay></MiniPlay>
    <!--
    <Play></Play>
    -->
    <List></List>
    <router-view/>
  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue'
  import Play from './components/common/Play.vue'
  import List from './components/common/List.vue'
  import MiniPlay from './components/common/MiniPlay.vue'
  export default {
    name: 'App',
    components: {
      NavBar,
      MiniPlay,
      Play,
      List
    }
  }
</script>

<style>

</style>
