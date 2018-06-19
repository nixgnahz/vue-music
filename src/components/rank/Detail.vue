<template>
  <div>
    <Info :info="infoList"></Info>
    <Songs :songs="songsList" :showOrder="showOrder"></Songs>
  </div>
</template>

<script>
  import Info from '../common/Info.vue'
  import Songs from '../common/Songs.vue'
  import resData from '../../../static/api/rankSong.json'
  export default {
    components: {
      Info,
      Songs
    },
    data () {
      return {
        infoList: {},
        showOrder: true,
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
