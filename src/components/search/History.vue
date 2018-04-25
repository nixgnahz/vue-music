<template>
  <div class="history_search" v-show="show && history.length">
    <p class="title">搜索历史</p>
    <span @click="emptyHistory">
      <Icon type="trash-a" size="18" class="history_empty"></Icon>
    </span>
    <ul>
      <li v-for="(item, index) in history">
        <span @click="setSearch(item)">{{item}}</span>
        <span @click="removeHistory(index)">
          <Icon type="android-close" size="18"></Icon>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    computed: {
      history () {
        return this.$store.state.search.history
      },
      show () {
        return this.$store.getters.show
      }
    },
    methods: {
      setSearch (item) {
        this.$store.dispatch('changeSearchValue', item);
        this.$store.dispatch('getSearchResults');
      },
      removeHistory (index) {
        this.$store.dispatch('removeHistory', index);
      },
      emptyHistory () {
        this.$store.dispatch('emptyHistory');
      }
    }
  }
</script>

<style>

</style>
