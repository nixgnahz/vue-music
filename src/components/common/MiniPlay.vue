<template>
  <div class="mini_player">
    <div class="bottom_box">
      <div :class="['cover', playFlag ? 'animation' : '']" :style="{backgroundImage: 'url(' + detail.cover + ')'}" @click="showPlay"></div>
      <div class="desc">
        <p class="name">{{detail.name}}</p>
        <p class="singer">{{detail.singer}}</p>
      </div>
      <div class="icons">
        <span class="icon" @click="changePlayStatus">
          <Icon v-show="!playFlag" type="ios-play-outline" size="25" color="#ffcd32"></Icon>
          <Icon v-show="playFlag" type="ios-pause-outline" size="25" color="#ffcd32"></Icon>
        </span>
        <span @click="showList">
          <Icon type="ios-toggle-outline" size="35" color="#ffcd32"></Icon>
        </span>
      </div>
    </div>
    <audio ref="audio"></audio>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        playFlag: true,
        detail: {}
      }
    },
    created: function () {
      axios.get('http://localhost:8080/static/api/song.json').then((res)=>{
        this.detail = res.data.data;
        this.$refs.audio.src = this.detail.source;
        this.$refs.audio.play();
      }).catch((error)=>{
        console.log(error)
      })
    },
    methods: {
      changePlayStatus () {
        if(this.playFlag) {
          this.$refs.audio.pause();
        } else{
          this.$refs.audio.play();
        }
        this.playFlag = !this.playFlag;
      },
      showPlay () {
        this.$store.dispatch("changeShowPlay");
      },
      showList () {
        this.$store.dispatch("changeShowList");
      }
    }
  }
</script>

<style>

</style>
