<template>
  <div>
    <Swiper></Swiper>
    <List></List>
    <transition name="spread">
      <router-view class="fixed upper"></router-view>
    </transition>
  </div>
</template>

<script>
  import Swiper from './recommend/Swiper.vue'
  import List from './recommend/List.vue'
  export default {
    components: {
      Swiper,
      List
    }
  }
</script>

<style>

</style>
