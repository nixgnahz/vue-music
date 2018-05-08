<template>
  <div>
    <div class="fixed_wrapper">
      <Scroll class="scroll_wrapper">
        <List></List>
      </Scroll>
    </div>
    <transition name="spread">
      <router-view class="fixed upper"></router-view>
    </transition>
  </div>
</template>

<script>
  import List from './rank/List.vue'
  import Scroll from './baseComponents/Scroll.vue'
  export default {
    components: {
      List,
      Scroll
    }
  }
</script>

<style>

</style>
