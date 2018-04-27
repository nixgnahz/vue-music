<template>
  <div class="play">
    <div class="play_header row">
      <span class="back_icon">
        <Icon type="chevron-down" size="25" color="#ffcd32"></Icon>
      </span>
      <p class="name">Cabriolet</p>
    </div>
    <p class="singer">Pixie Paris</p>
    <div class="middle">
      <div class="cover_wrapper" style="opacity: 0;">
        <div class="row">
          <div class="cover"></div>
        </div>
        <p class="desc">Cabriolet - Pixie Paris</p>
      </div>
      <div class="lyric_wrapper">
        <p class="text">浮夸 - 陈奕迅</p>
        <p class="text current">词：黄伟文</p>
        <p class="text">曲：C.Y. Kong</p>
        <p class="text">有人问我 我就会讲</p>
        <p class="text">有人问我</p>
        <p class="text">我就会讲</p>
        <p class="text">有人问我 我就会讲</p>
        <p class="text">有人问我</p>
        <p class="text">我就会讲</p>
        <p class="text">有人问我 我就会讲</p>
        <p class="text">有人问我 我就会讲</p>
        <p class="text">有人问我 我就会讲</p>
        <p class="text">有人问我</p>
        <p class="text">我就会讲</p>
        <p class="text">有人问我 我就会讲</p>
        <p class="text">有人问我</p>
        <p class="text">我就会讲</p>
        <p class="text">有人问我 我就会讲</p>
        <p class="text">有人问我 我就会讲</p>
      </div>
    </div>
    <div class="dot">
      <p class="inactive"></p>
      <p class="active"></p>
    </div>
    <div class="progress">
      <span class="time">00:00</span>
      <div class="wrapper">
        <div class="bar">
          <p class="btn"></p>
        </div>
      </div>
      <span class="time">03:31</span>
    </div>
    <div class="action_btn">
      <span class="icon" @click="changePlayType">
        <Icon v-show="play_type" type="shuffle" size="20" color="#ffcd32"></Icon>
        <Icon v-show="!play_type" type="android-sync" size="20" color="#ffcd32"></Icon>
      </span>
      <Icon type="ios-rewind" size="20" color="#ffcd32"></Icon>
      <span class="icon" @click="changePlayStatus">
        <Icon v-show="play_status" type="play" size="20" color="#ffcd32"></Icon>
        <Icon v-show="!play_status" type="pause" size="20" color="#ffcd32"></Icon>
      </span>
      <Icon type="ios-fastforward" size="20" color="#ffcd32"></Icon>
      <span @click="changeLikeStatus">
        <Icon v-show="!like_status" type="ios-heart-outline" size="30" color="#ffcd32"></Icon>
        <Icon v-show="like_status" type="ios-heart" size="30" color="#ffcd32"></Icon>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        play_type: 1,
        play_status: 1,
        like_status: 0,
        show_lyric: true
      }
    },
    methods: {
      changePlayType () {
        this.play_type = !this.play_type
      },
      changePlayStatus () {
        this.play_status = !this.play_status
      },
      changeLikeStatus () {
        this.like_status = !this.like_status
      }
    }
  }
</script>

<style>

</style>
