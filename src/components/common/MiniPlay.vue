<template>
  <div class="mini_player">
    <div class="bottom_box">
      <div :class="['cover', animationFlag ? 'animation' : '']" @click="showPlay"></div>
      <div class="desc">
        <p class="name">演员</p>
        <p class="singer">薛之谦</p>
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
  </div>
</template>

<script>
  export default {
    data () {
      return {
        playFlag: true,
        animationFlag: true
      }
    },
    watch: {
      playFlag () {
        this.animationFlag = this.playFlag;
      }
    },
    methods: {
      changePlayStatus () {
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
