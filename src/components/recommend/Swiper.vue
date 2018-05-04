<template>
  <div class="swipers" v-if="items.length">
    <swiper :options="options" :not-next-tick="options.notNextTick">
      <swiper-slide v-for="item in items" :key="item.id">
        <a :href="item.linkUrl">
          <img :src="item.picUrl" />
        </a>
      </swiper-slide>
      <div class="swiper-pagination" v-if="options.pagination" slot="pagination"/>
    </swiper>
  </div>
</template>

<script>
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
        }
      }
    },
    props: ["items"]
  }
</script>

<style>

</style>
