<template>
  <div id="app">
    <NavBar></NavBar>
    <MiniPlay v-if="showMiniPlay"></MiniPlay>
    <Play v-if="showPlay"></Play>
    <List v-if="showList"></List>
    <transition name="spread">
      <Add v-if="showAdd"></Add>
    </transition>
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

<style lang="scss">
  @import '../static/Sass/common.scss';
  @import '../static/Sass/search.scss';
  @import '../static/Sass/user.scss';
  @import '../static/Sass/rank.scss';
  @import '../static/Sass/singer.scss';
  @import '../static/Sass/recommend.scss';
  @import '../static/Sass/player.scss';
  @import '../static/Sass/list.scss';
  @import '../static/Sass/animation.scss';
  @import '../static/Sass/playlist.scss';
</style>
