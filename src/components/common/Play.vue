<template>
  <div class="play fixed">
    <div class="play_header row">
      <span class="back_icon" @click="showPlay">
        <Icon type="chevron-down" size="25" color="#ffcd32"></Icon>
      </span>
      <p class="name">{{detail.name}}</p>
    </div>
    <p class="singer">{{detail.singer}}</p>
    <div class="middle swipers">
      <swiper :options="options" :not-next-tick="options.notNextTick" ref="swiper" @slideChangeTransitionEnd="slideEnd">
        <swiper-slide>
          <div class="cover_wrapper">
            <div class="row">
              <div class="cover"></div>
            </div>
            <p class="desc">Cabriolet - Pixie Paris</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <section class="lyric_scroll">
            <Scroll class="lyric_wrapper">
              <div class="lyrics">
                <p class="text" :class="[current == index ? 'current' : '']" v-for="(item, index) in detail.lyric">{{item}}</p>
              </div>
            </Scroll>
          </section>
        </swiper-slide>
      </swiper>
    </div>
    <div class="dot">
      <p :class="[activeIndex ? 'inactive' : 'active']"></p>
      <p :class="[activeIndex ? 'active' : 'inactive']"></p>
    </div>
    <div class="progress">
      <span class="time">00:00</span>
      <div class="wrapper">
        <div class="bar">
          <p class="btn"></p>
        </div>
      </div>
      <span class="time">{{detail.totalTime}}</span>
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
  import axios from 'axios'
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import Scroll from './Scroll.vue'
  export default {
    components: {
      swiper,
      swiperSlide,
      Scroll
    },
    data () {
      return {
        play_type: 1,
        play_status: 1,
        like_status: 0,
        current: 2,
        activeIndex: 0,
        detail: {},
        options: {
          notNextTick: true
        }
      }
    },
    created: function () {
      axios.get('http://localhost:8080/static/song.json').then((res)=>{
        this.detail = res.data.data;
      }).catch((error)=>{
        console.log(error)
      })
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
      },
      showPlay () {
        this.$store.dispatch("changeShowPlay");
      },
      slideEnd () {
        this.activeIndex = this.$refs.swiper.swiper.activeIndex;
      }
    }
  }
</script>

<style>

</style>
