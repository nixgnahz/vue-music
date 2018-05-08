<template>
  <div class="songs outer_wrapper">
    <Scroll class="scroll_wrapper">
      <ul>
        <li v-for="(item, index) in songs" @click="showMiniPlay(item.id)" :key="item.id">
          <div class="order" v-if="showOrder">
            <img v-if="index === 0" :src="first"/>
            <img v-if="index === 1" :src="second"/>
            <img v-if="index === 2" :src="third"/>
            <p v-if="index > 2">{{index + 1}}</p>
          </div>
          <div class="info">
            <p class="title">{{item.name}}</p>
            <p class="desc">{{item.desc}}</p>
          </div>
        </li>
      </ul>
    </Scroll>
  </div>
</template>

<script>
  import Scroll from '../baseComponents/Scroll.vue'
  export default {
    props: {
      songs: {
        type: Array,
        required: true
      },
      showOrder: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        first: require('../../../static/first.png'),
        second: require('../../../static/second.png'),
        third: require('../../../static/third.png')
      }
    },
    methods: {
      showMiniPlay (id) {
        this.$store.dispatch('showMiniPlay');
      }
    },
    components: {
      Scroll
    }
  }
</script>

<style>

</style>
