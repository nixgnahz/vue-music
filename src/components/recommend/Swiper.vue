<template>
  <div class="swipers" v-if="items.length">
    <swiper :options="options" :not-next-tick="options.notNextTick">
      <swiper-slide v-for="item in items" :key="item.id">
        <a :href="item.href">
          <img :src="item.cover" />
        </a>
      </swiper-slide>
      <div class="swiper-pagination" v-if="options.pagination" slot="pagination"/>
    </swiper>
  </div>
</template>

<script>
  import getSwiper from '@/api/swiper'
  import {success} from '@/api/jsonp'
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
      getSwiper().then((res)=>{
        if(res.code === success) {
          res.data.slider.filter((item)=>{
            this.items.push({cover: item.picUrl, href: item.linkUrl, id: item.id})
          })
        }
      })
    }
  }
</script>

<style>

</style>
