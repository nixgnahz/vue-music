<template>
  <div>
    <div class="fixed_wrapper">
      <Scroll class="scroll_wrapper">
        <section>
          <Swiper :items="swipers"></Swiper>
          <List :items="recommends"></List>
        </section>
      </Scroll>
    </div>
    <transition name="spread">
      <router-view class="fixed upper"></router-view>
    </transition>
  </div>
</template>

<script>
  import Swiper from './recommend/Swiper.vue'
  import List from './recommend/List.vue'
  import Scroll from './baseComponents/Scroll.vue'
  import res from '../../static/api/swiper.json'
  import resData from '../../static/api/recommend.json'
  export default {
    components: {
      Swiper,
      List,
      Scroll
    },
    data () {
      return {
        swipers: [],
        recommends: []
      }
    },
    created () {
      this.swipers = res.data;
      this.recommends = resData.data;
    }
  }
</script>

<style>

</style>
