<template>
  <div class="songs outer_wrapper">
    <Scroll class="scroll_wrapper">
      <ul>
        <li v-for="item in songs" @click="showMiniPlay(item.id)" :key="item.id">
          <p class="title">{{item.name}}</p>
          <p class="desc">{{item.desc}}</p>
        </li>
      </ul>
    </Scroll>
  </div>
</template>

<script>
  import Scroll from './Scroll.vue'
  export default {
    props: ["songs"],
    methods: {
      showMiniPlay (id) {
        this.$store.dispatch('changeShowMiniPlay');
      }
    },
    components: {
      Scroll
    }
  }
</script>

<style>
  .outer_wrapper {
    position: fixed;
    width: 100%;
    bottom: 0px;
    top: 40%;
  }
</style>
