<template>
  <transition name="fade">
    <div class="mask">
      <div class="list_wrapper">
        <div class="play_type">
          <p v-if="play_type">
            <span class="circle_wrap icon_type" @click="changePlayType">
              <Icon type="shuffle" size="20" color="#ffcd32"></Icon>
            </span>
            <span class="text">随机播放</span>
          </p>
          <p v-if="!play_type">
            <span class="circle_wrap icon_type" @click="changePlayType">
              <Icon type="android-sync" size="20" color="#ffcd32"></Icon>
            </span>
            <span class="text">顺序播放</span>
          </p>
          <span class="empty">
            <Icon type="trash-a" size="20"></Icon>
          </span>
        </div>
        <div class="wrapper">
          <section class="scroll_wrapper" ref="wrapper">
            <ul>
              <li v-for="(item, index) in lists" :key="item.id">
                <p :class="[activeIndex == index ? 'circle_wrap' : '', 'icon_play']">
                  <Icon class="scale" type="play" size="5" color="#ffcd32" v-if="activeIndex == index"></Icon>
                </p>
                <p class="title" @click="scrollTo(index, $event)">{{item.name}}</p>
                <p class="action">
                  <span>
                    <Icon v-show="false" type="ios-heart-outline" size="15" color="#ffcd32"></Icon>
                    <Icon type="ios-heart" size="15" color="#d93f30"></Icon>
                  </span>
                  <span class="remove">
                    <Icon type="android-close" size="15" color="#ffcd32"></Icon>
                  </span>
                </p>
              </li>
            </ul>
          </section>
        </div>
        <div class="btn_wrapper" @click="changeAdd">
          <div class="btn">
            <Icon type="plus-round"></Icon>
            <span>添加歌曲到队列</span>
          </div>
        </div>
        <div class="close" @click="showList">关闭</div>
      </div>
    </div>
  </transition>
</template>

<script>
  import BScroll from 'better-scroll'
  import axios from 'axios'
  export default {
    data () {
      return {
        play_type: 1,
        activeIndex: 0,
        lists: []
      }
    },
    created: function () {
      axios.get('http://localhost:8080/static/playList.json').then((res)=>{
        this.lists = res.data.data;
        this.$nextTick(() => {
          this._initScroll();
        })
      }).catch((error)=>{
        console.log(error)
      })
    },
    methods: {
      _initScroll () {
        var self = this;
        this.wrapper = new BScroll(this.$refs.wrapper, {
          click: true,
          probeType: 3
        })
        this.wrapper.on('scroll', function (pos) {
          self.WrapperY = Math.abs(Math.round(pos.y));
        })
        this.detailList = this.$refs.wrapper.querySelectorAll('li');
      },
      scrollTo (index, event) {
        if (!event._constructed) return;
        this.activeIndex = index;
        this.wrapper.scrollToElement(this.detailList[index], 300);
      },
      showList () {
        this.$store.dispatch('changeShowList');
      },
      changeAdd () {
        this.$store.dispatch('changeShowAdd');
      },
      changePlayType () {
        this.play_type = !this.play_type
      }
    }
  }
</script>

<style>

</style>
