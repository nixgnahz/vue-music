<template>
  <div class="swipers">
    <swiper :options="options" :not-next-tick="options.notNextTick">
      <swiper-slide v-for="item in items" :key="item.cover">
        <a :href="item.href">
          <img :src="item.cover" />
        </a>
      </swiper-slide>
      <div class="swiper-pagination" v-if="options.pagination" slot="pagination"/>
    </swiper>
  </div>
</template>

<script>
  import axios from 'axios'
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    components: {
      swiper,
      swiperSlide
    },
    data () {
      return {
        options: {
          autoplay: true,
          pagination: {
            el: ".swiper-pagination",
            bulletActiveClass: 'dot_active',
            bulletClass: 'dot'
          },
          notNextTick: false
        },
        items: []
      }
    },
    created () {
      axios.get('http://localhost:8080/static/swiper.json').then((res)=>{
        this.items = res.data.data;
      }).catch((error)=>{
        console.log(error)
      })
    }
  }
</script>

<style>

</style>
