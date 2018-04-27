<template>
  <div class="show">
    <Info :info="info"></Info>
    <Songs></Songs>
  </div>
</template>

<script>
  import Info from './Info.vue'
  import Songs from './Songs.vue'
  export default {
    data () {
      return {
        info: {
          cover: "http://p.qpic.cn/music_cover/mFiciatCFVenF2OCeP6oswAP2Swzgxmib5Nh6DqS2Vowh2SMicPSwTxUcg/600?n=1",
          name: "马友友：最性感的古典音乐家"
        }
      }
    },
    components: {
      Info,
      Songs
    }
  }
</script>

<style>

</style>
