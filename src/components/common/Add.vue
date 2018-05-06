<template>
  <div class="add fixed">
    <div class="top">
      <p>添加歌曲到列表</p>
      <span class="close_icon" @click="showAdd">
        <Icon type="android-close" size="30" color="#ffcd32"></Icon>
      </span>
    </div>
    <div class="menu_header">
      <div class="top">
        <div class="menu">
          <p :class="[index == activeIndex ? 'active' : 'inactive']" v-for="(item, index) in menu" @click="changeMenu(index)">{{item}}</p>
        </div>
      </div>
    </div>
    <div class="search_menu" v-show="activeIndex">
      <Search></Search>
      <History></History>
      <Result></Result>
    </div>
    <div class="user_songs add_listen_top" v-show="!activeIndex">
      <Scroll class="scroll_wrapper">
        <section>
          <ul>
            <li v-for="item in songs">
              <p class="name">{{item.name}}</p>
              <p class="desc">{{item.desc}}</p>
            </li>
          </ul>
        </section>
      </Scroll>
    </div>
  </div>
</template>

<script>
  import Search from '../search/Input.vue'
  import History from '../search/History.vue'
  import Result from '../search/Result.vue'
  import Scroll from './Scroll.vue'
  import axios from 'axios'
  export default {
    components: {
      Search,
      History,
      Result,
      Scroll
    },
    data () {
      return {
        activeIndex: 0,
        songs: [],
        menu: ["最近播放", "搜索历史"]
      }
    },
    created () {
      axios.get('http://localhost:8080/static/like.json').then((res)=>{
        this.songs = res.data.data.listen;
      }).catch((error)=>{
        console.log(error)
      })
    },
    methods: {
      changeMenu (index) {
        this.activeIndex = index;
      },
      showAdd () {
        this.$store.dispatch('changeShowAdd');
      }
    }
  }
</script>

<style>

</style>
