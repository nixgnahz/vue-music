<template>
  <div>
    <Info :info="infoList"></Info>
    <Songs :songs="songsList" :showOrder="showOrder"></Songs>
  </div>
</template>

<script>
  import Info from '../common/Info.vue'
  import Songs from '../common/Songs.vue'
  import axios from 'axios'
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
      axios.get('http://localhost:8080/static/rankSong.json').then((res)=>{
        this.infoList = res.data.info;
        this.songsList = res.data.songs;
      }).catch((error)=>{
        console.log(error)
      })
    }
  }
</script>

<style>

</style>
