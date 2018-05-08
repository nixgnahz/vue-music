<template>
  <transition name="show">
    <div class="play fixed">
      <div class="blur_cover">
        <img :src="detail.cover" />
      </div>
      <section class="top">
        <div class="play_header row">
          <span class="back_icon" @click="showPlay">
            <Icon type="chevron-down" size="25" color="#ffcd32"></Icon>
          </span>
          <p class="name">{{detail.name}}</p>
        </div>
        <p class="singer">{{detail.singer}}</p>
      </section>
      <div class="middle swipers">
        <swiper :options="options" :not-next-tick="options.notNextTick" ref="swiper" @slideChangeTransitionEnd="slideEnd">
          <swiper-slide>
            <div class="cover_wrapper">
              <div class="row">
                <div :class="['cover', play_status ? 'animation' : '']" :style="{backgroundImage: 'url(' + detail.cover + ')'}"></div>
              </div>
              <p class="desc">{{currentLyric}}</p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <section class="lyric_scroll">
              <div class="lyric_wrapper" ref="wrapper">
                <div class="lyrics">
                  <p class="text" :class="[lyricIndex == index ? 'current' : '']" v-for="(item, index) in detail.lyric">{{item}}</p>
                </div>
              </div>
            </section>
          </swiper-slide>
        </swiper>
      </div>
      <section class="bottom">
        <div class="dot">
          <p :class="[activeIndex ? 'inactive' : 'active']"></p>
          <p :class="[activeIndex ? 'active' : 'inactive']"></p>
        </div>
        <div class="progress">
          <span class="time">{{currentTime}}</span>
          <section @touchstart.prevent="calculate" @touchmove.prevent="calculate">
            <div class="wrapper">
              <div class="bar" :style="{width: progress + '%'}">
                <p class="btn"></p>
              </div>
            </div>
          </section>
          <span class="time">{{detail.totalTime}}</span>
        </div>
        <div class="action_btn">
          <span class="icon" @click="changePlayType">
            <Icon v-show="play_type" type="shuffle" size="20" color="#ffcd32"></Icon>
            <Icon v-show="!play_type" type="android-sync" size="20" color="#ffcd32"></Icon>
          </span>
          <Icon type="ios-rewind" size="20" color="#ffcd32"></Icon>
          <span class="icon" @click="changePlayStatus">
            <Icon v-show="!play_status" type="play" size="20" color="#ffcd32"></Icon>
            <Icon v-show="play_status" type="pause" size="20" color="#ffcd32"></Icon>
          </span>
          <Icon type="ios-fastforward" size="20" color="#ffcd32"></Icon>
          <span @click="changeLikeStatus">
            <Icon v-show="!like_status" type="ios-heart-outline" size="30" color="#ffcd32"></Icon>
            <Icon v-show="like_status" type="ios-heart" size="30" color="#d93f30"></Icon>
          </span>
        </div>
      </section>
    </div>
  </transition>
</template>

<script>
  import axios from 'axios'
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import BScroll from 'better-scroll'
  const window = {
    width: document.documentElement.clientWidth * 0.55,
    left: document.documentElement.clientWidth * 0.45 / 2
  }
  export default {
    components: {
      swiper,
      swiperSlide
    },
    data () {
      return {
        play_type: 1,
        play_status: 1,
        like_status: 0,
        activeIndex: 0,
        detail: {},
        progress: 0,
        currentTime: "00:00",
        currentLyric: "",
        lyricIndex: 0,
        totalTime: 0,
        options: {
          notNextTick: true
        },
        wrapper: {},
        detailList: []
      }
    },
    created: function () {
      axios.get('http://localhost:8080/static/song.json').then((res)=>{
        this.detail = res.data.data;
        this.currentLyric = this.detail.lyric[this.lyricIndex];
        this._calculateTime();
        this.$nextTick(() => {
          this._initScroll();
        })
      }).catch((error)=>{
        console.log(error)
      })
    },
    methods: {
      changePlayType () {
        this.play_type = !this.play_type;
      },
      changePlayStatus () {
        this.play_status = !this.play_status;
      },
      changeLikeStatus () {
        this.like_status = !this.like_status;
      },
      showPlay () {
        this.$store.dispatch("changeShowPlay");
      },
      slideEnd () {
        this.activeIndex = this.$refs.swiper.swiper.activeIndex;
      },
      calculate (e) {
        let move = e.touches[0].pageX;
        let distance = move - window.left;
        if(distance < 0) distance = 0;
        if(distance > window.width) distance = window.width;
        let progress = Math.floor(distance / window.width * 100);
        this.progress = progress;
        this._setTime();
        this._setLyric();
        this._scrollToElement();
      },
      _initScroll () {
        var self = this;
        this.wrapper = new BScroll(this.$refs.wrapper, {
          click: true
        })
        this.detailList = this.$refs.wrapper.querySelectorAll('.text');
      },
      _scrollToElement () {
        let index = Math.floor(this.progress / 100 * this.detailList.length) - 5;
        if (index < 0) index = 0;
        this.wrapper.scrollToElement(this.detailList[index], 300);
      },
      _calculateTime () {
        let arr = this.detail.totalTime.split(":");
        let time = Number(arr[0]) * 60 + Number(arr[1]);
        this.totalTime = time;
      },
      _setLyric () {
        let index = Math.floor(this.progress / 100 * this.detail.lyric.length);
        if (index >= this.detail.lyric.length) index = this.detail.lyric.length - 1;
        this.lyricIndex = index;
      },
      _setTime () {
        let current = this.progress / 100 * this.totalTime;
        let minute = Math.floor(current / 60);
        let second = Math.floor(current % 60);
        this.currentTime = (minute < 10 ? "0" + minute : minute) + ":" + (second < 10 ? "0" + second : second);
      }
    },
    watch: {
      lyricIndex () {
        this.currentLyric = this.detail.lyric[this.lyricIndex];
      }
    }
  }
</script>

<style>
  .blur_cover {
    position: absolute;
    top: 0px;
    left: 0px;
    opacity: 0.6;
    filter: blur(20px);
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .blur_cover img {
    width: 100%;
    height: 100%;
  }
</style>
