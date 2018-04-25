<template>
  <div class="search_input">
    <Icon type="ios-search" class="icon" size="20"></Icon>
    <input type="text" v-model.trim="search_value" placeholder="搜索歌曲、歌手" @blur="searchMusic"/>
    <span @click="emptyValue" class="icon">
      <Icon type="close-circled" size="20" v-show="close_flag"></Icon>
    </span>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        close_flag: false
      }
    },
    computed: {
      search_value: {
        get () {
          return this.$store.state.search.searchValue
        },
        set (value) {
          this.$store.dispatch('changeSearchValue', value);
        }
      }
    },
    watch: {
      search_value () {
        if(this.search_value) {
          this.close_flag = true;
        } else{
          this.close_flag = false;
        }
      }
    },
    methods: {
      emptyValue () {
        this.$store.dispatch('changeSearchValue', "");
      },
      searchMusic () {
        this.$store.dispatch('getSearchResults');
        this.$store.dispatch('addHistory');
      }
    }
  }
</script>

<style>

</style>
