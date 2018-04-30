<template>
  <div class="singer_list">
    <div class="menu">
      <ul>
        <li @click="changeSingerList(index)" :class="[index == activeIndex ? 'active' : '']" v-for="(item, index) in menuList">{{item.label}}</li>
      </ul>
    </div>
    <div class="content">
      <p class="title">
        <span>{{singerList.value}}</span>
      </p>
      <ul>
        <li v-for="(item, index) in singerList.singers" @click="showSongs(index)">
          <div class="portrait" :style="{backgroundImage: 'url(' +  item.cover + ')'}"></div>
          <p class="name">{{item.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        menuList: [],
        activeIndex: 0,
        singerList: []
      }
    },
    created () {
      axios.get('http://localhost:8080/static/singer.json').then((res)=>{
        this.menuList = res.data.data;
        this.singerList = this.menuList[this.activeIndex];
      }).catch((error)=>{
        console.log(error);
      })
    },
    methods: {
      showSongs (id) {
        this.$router.push({
          name: 'singerDetail',
          params: {
            id: id
          }
        })
      },
      changeSingerList (index) {
        this.activeIndex = index;
      }
    },
    watch: {
      activeIndex () {
        this.singerList = this.menuList[this.activeIndex];
      }
    }
  }
</script>

<style>

</style>
