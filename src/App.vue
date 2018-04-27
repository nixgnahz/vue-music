<template>
  <div id="app">
    <NavBar></NavBar>
    <MiniPlay></MiniPlay>
    <!--
    <Play></Play>
    <List></List>
    -->
    <Add></Add>
    <router-view/>
  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue'
  import Play from './components/common/Play.vue'
  import Add from './components/common/Add.vue'
  import List from './components/common/List.vue'
  import MiniPlay from './components/common/MiniPlay.vue'
  export default {
    name: 'App',
    components: {
      NavBar,
      MiniPlay,
      Play,
      List,
      Add
    }
  }
</script>

<style>

</style>
