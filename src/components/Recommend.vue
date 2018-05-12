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
  import getSwiper from '@/api/swiper'
  import {success} from '@/api/jsonp'
  import Scroll from './baseComponents/Scroll.vue'
  import axios from 'axios'
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
      getSwiper().then((res)=>{
        if(res.code === success) {
          this.swipers = res.data.slider;
        }
      })
      axios.get('http://localhost:8080/static/api/recommend.json').then((res)=>{
        this.recommends = res.data.data;
      }).catch((error)=>{
        console.log(error)
      })
    }
  }
</script>

<style>

</style>
