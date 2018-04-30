<template>
  <div class="songs">
    <ul>
      <li v-for="item in songs" @click="showMiniPlay(item.id)" :key="item.id">
        <p class="title">{{item.name}}</p>
        <p class="desc">{{item.desc}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ["songs"],
    methods: {
      showMiniPlay (id) {
        this.$store.dispatch('changeShowMiniPlay');
      }
    }
  }
</script>

<style>

</style>
