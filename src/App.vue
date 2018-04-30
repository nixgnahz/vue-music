<template>
  <div id="app">
    <NavBar></NavBar>
    <MiniPlay v-if="showMiniPlay"></MiniPlay>
    <Play v-if="showPlay"></Play>
    <List v-if="showList"></List>
    <Add v-if="showAdd"></Add>
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
    },
    computed: {
      showPlay () {
        return this.$store.state.show.showPlay
      },
      showList () {
        return this.$store.state.show.showList
      },
      showAdd () {
        return this.$store.state.show.showAdd
      },
      showMiniPlay () {
        return this.$store.state.show.showMiniPlay
      }
    }
  }
</script>

<style>

</style>
