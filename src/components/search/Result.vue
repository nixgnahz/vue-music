<template>
  <div class="search_result" v-show="searchLists.length || showEmpty">
    <Scroll class="scroll_wrapper">
      <section>
        <ul v-if="searchLists.length">
          <li v-for="item in searchLists">
            <Icon type="music-note" size="15"></Icon>
            <p>{{item.name}}-{{item.artists[0].name}}</p>
          </li>
        </ul>
        <div class="empty_results" v-show="!searchLists.length && showEmpty">
          <p>抱歉，暂无搜索结果</p>
        </div>
      </section>
    </Scroll>
  </div>
</template>

<script>
  import Scroll from '../baseComponents/Scroll.vue'
  export default {
    components: {
      Scroll
    },
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
