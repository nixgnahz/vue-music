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
  import axios from 'axios'
  export default {
    data () {
      return {
        items: []
      }
    },
    created: function () {
      axios.get('http://localhost:8080/static/rank.json').then((res)=>{
        this.items = res.data.data;
      }).catch((error)=>{
        console.log(error);
      })
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
