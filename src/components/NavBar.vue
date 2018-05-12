<template>
  <div>
    <div class="brand">
      <img :src="portrait" />
      <h2>Zhangxin Music</h2>
      <router-link :to="{name: 'user'}">
        <Icon class="user_icon" type="ios-person-outline" size="30" color="#ffcd32"></Icon>
      </router-link>
    </div>
    <div class="navbar">
      <router-link v-for="(item, index) in menu" :to="{name: item.href}" :key="index">
        <p>{{item.value}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      portrait: require('../../static/image/portrait.png'),
      menu: [
        {
          href: 'recommend',
          value: '推荐'
        },
        {
          href: 'singer',
          value: '歌手'
        },
        {
          href: 'rank',
          value: '排行'
        },
        {
          href: 'search',
          value: '搜索'
        }
      ]
    }
  }
}
</script>

<style>

</style>
