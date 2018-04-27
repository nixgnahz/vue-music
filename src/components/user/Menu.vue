<template>
  <div class="user_header menu_header">
    <div class="top">
      <span @click="goBack">
        <Icon class="back_icon" type="ios-arrow-back" size="35" color="#ffcd32"></Icon>
      </span>
      <div class="menu">
        <p :class="[index == activeIndex ? 'active' : 'inactive']" v-for="(item, index) in menu" @click="changeMenu(index)">{{item}}</p>
      </div>
    </div>
    <div class="play_btn">
      <Icon type="play"></Icon>
      <span>随机播放全部</span>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex: 0,
        menu: ["我喜欢的", "我最近听的"]
      }
    },
    methods: {
      changeMenu (index) {
        this.activeIndex = index;
      },
      goBack () {
        this.$router.go(-1);
      }
    }
  }
</script>

<style>

</style>
