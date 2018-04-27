<template>
  <div class="recommend_list">
    <p class="title">热门歌单推荐</p>
    <ul>
      <li @click="showSongs">
        <div class="cover"></div>
        <div class="content">
          <p class="name">还不是因为你长得不好看</p>
          <p class="desc">春意盎然！2018年4月华语新歌推荐</p>
        </div>
      </li>
      <li>
        <div class="cover"></div>
        <div class="content">
          <p class="name">还不是因为你长得不好看</p>
          <p class="desc">春意盎然！2018年4月华语新歌推荐2018年4月华语新歌推荐</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    methods: {
      showSongs () {
        this.$store.dispatch('changeShowSongs');
      }
    }
  }
</script>

<style>

</style>
