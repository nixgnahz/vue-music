<template>
  <div>
    <Swiper></Swiper>
    <List></List>
    <!--
    <Show></Show>
    -->
  </div>
</template>

<script>
  import Swiper from './recommend/Swiper.vue'
  import List from './recommend/List.vue'
  import Show from './common/Show.vue'
  export default {
    components: {
      Swiper,
      List,
      Show
    }
  }
</script>

<style>

</style>
