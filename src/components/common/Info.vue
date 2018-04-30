<template>
  <div class="info" :style="{backgroundImage: 'url(' +  info.cover +')'}">
    <div class="filter">
      <div class="top">
        <span @click="goBack">
          <Icon class="back_icon" type="ios-arrow-back" size="35" color="#ffcd32"></Icon>
        </span>
        <p class="name">{{info.name}}</p>
      </div>
      <div class="play_wrapper">
        <div class="play_btn">
          <Icon type="play"></Icon>
          <span>随机播放全部</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 export default {
   props: ["info"],
   methods: {
     goBack () {
       this.$router.go(-1);
     }
   }
 }
</script>

<style>

</style>
