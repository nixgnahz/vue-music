<template>
  <div>
    <List></List>
    <transition name="spread">
      <router-view class="fixed upper"></router-view>
    </transition>
  </div>
</template>

<script>
  import List from './rank/List.vue'
  export default {
    components: {
      List
    }
  }
</script>

<style>

</style>
