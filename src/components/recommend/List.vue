<template>
  <div class="recommend_list">
    <p class="title">热门歌单推荐</p>
    <ul>
      <li v-for="(item, index) in items" @click="showSongs(index)">
        <div class="cover" :style="{backgroundImage: 'url(' + item.cover + ')'}"></div>
        <div class="content">
          <p class="name">{{item.name}}</p>
          <p class="desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ["items"],
    methods: {
      showSongs (id) {
        this.$router.push({
          name: 'recommendDetail',
          params: {
            id: id
          }
        })
      }
    }
  }
</script>

<style>

</style>
