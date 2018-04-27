<template>
  <div class="add fixed">
    <div class="top">
      <p>添加歌曲到列表</p>
      <span class="close_icon">
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
    <Songs v-show="!activeIndex"></Songs>
  </div>
</template>

<script>
  import Search from '../search/Input.vue'
  import History from '../search/History.vue'
  import Result from '../search/Result.vue'
  import Songs from './Songs.vue'
  export default {
    components: {
      Search,
      Songs,
      History,
      Result
    },
    data () {
      return {
        activeIndex: 0,
        menu: ["最近播放", "搜索历史"]
      }
    },
    methods: {
      changeMenu (index) {
        this.activeIndex = index;
      }
    }
  }
</script>

<style>
  .add .top {
    position: relative;
    text-align: center;
    padding: 0.5rem 0px;
    font-size: 0.75rem;
    font-weight: 900;
  }

  .add .top .close_icon {
    position: absolute;
    top: 0.38rem;
    right: 0.5rem;
  }
</style>
