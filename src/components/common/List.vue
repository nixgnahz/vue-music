<template>
  <transition name="fade">
    <div class="mask">
      <div class="list_wrapper">
        <div class="play_type">
          <p>
            <span class="circle_wrap icon_type">
              <Icon type="shuffle" size="20" color="#ffcd32"></Icon>
            </span>
            <span class="text">随机播放</span>
          </p>
          <p v-show="false">
            <span class="circle_wrap">
              <Icon type="android-sync" size="20" color="#ffcd32"></Icon>
            </span>
            <span class="text">顺序播放</span>
          </p>
          <span class="empty">
            <Icon type="trash-a" size="20"></Icon>
          </span>
        </div>
        <div class="wrapper">
          <Scroll class="scroll_wrapper">
            <ul>
              <li v-for="item in lists" :key="item.id">
                <p class="current circle_wrap icon_play">
                  <Icon class="scale" type="play" size="5" color="#ffcd32"></Icon>
                </p>
                <p class="title">{{item.name}}</p>
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
          </Scroll>
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
  import Scroll from './Scroll.vue'
  import axios from 'axios'
  export default {
    components: {
      Scroll
    },
    data () {
      return {
        lists: []
      }
    },
    created: function () {
      axios.get('http://localhost:8080/static/playList.json').then((res)=>{
        this.lists = res.data.data;
      }).catch((error)=>{
        console.log(error)
      })
    },
    methods: {
      showList () {
        this.$store.dispatch('changeShowList');
      },
      changeAdd () {
        this.$store.dispatch('changeShowAdd');
      }
    }
  }
</script>

<style>

</style>
