<template>
  <div class="hot_search" v-show="show && hot.length">
    <p class="title">热门搜索</p>
    <ul>
      <li v-for="item in hot" @click="setSearch(item)">{{item}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    computed: {
      hot () {
        return this.$store.state.search.hot
      },
      show () {
        return this.$store.getters.show
      }
    },
    methods: {
      setSearch (item) {
        this.$store.dispatch('changeSearchValue', item);
        this.$store.dispatch('getSearchResults');
      }
    }
  }
</script>

<style>

</style>
