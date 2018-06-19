<template>
  <div>
    <Info :info="infoList"></Info>
    <Songs :songs="songsList"></Songs>
  </div>
</template>

<script>
  import Info from '../common/Info.vue'
  import Songs from '../common/Songs.vue'
  import resData from '../../../static/api/singerSong.json'
  export default {
    components: {
      Info,
      Songs
    },
    data () {
      return {
        infoList: {},
        songsList: []
      }
    },
    created () {
      this.infoList = resData.info;
      this.songsList = resData.songs;
    }
  }
</script>

<style>

</style>
