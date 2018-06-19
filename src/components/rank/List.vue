<template>
  <div class="rank_list">
    <ul>
      <li v-for="(item, index) in items" @click="showSongs(index)">
        <div class="cover" :style="{backgroundImage: 'url(' + item.cover + ')'}"></div>
        <div class="list">
          <p v-for="(itm, idx) in item.lists">
            <span>{{idx + 1}}</span>{{itm}}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import resData from '../../../static/api/rank.json'
  export default {
    data () {
      return {
        items: []
      }
    },
    created: function () {
      this.items = resData.data;
    },
    methods: {
      showSongs (id) {
        this.$router.push({
          name: 'rankDetail',
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
