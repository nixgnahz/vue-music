<template>
  <div class="search_result" v-show="searchLists.length || showEmpty">
    <ul>
      <li v-for="item in searchLists">
        <Icon type="music-note" size="15"></Icon>
        <p>{{item.name}}-{{item.artists[0].name}}</p>
      </li>
    </ul>
    <div class="empty_results" v-show="!searchLists.length && showEmpty">
      <Icon type="sad" size="100"></Icon>
      <p>抱歉，暂无搜索结果</p>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      searchLists: {
        get () {
          return this.$store.state.search.results
        }
      },
      showEmpty () {
        return this.$store.state.search.showEmpty
      }
    }
  }
</script>

<style>

</style>
