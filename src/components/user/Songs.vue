<template>
  <div class="user_songs">
    <Scroll class="scroll_wrapper">
      <section>
        <ul>
          <li v-for="item in songs">
            <p class="name">{{item.name}}</p>
            <p class="desc">{{item.desc}}</p>
          </li>
        </ul>
      </section>
    </Scroll>
  </div>
</template>

<script>
  import resData from '../../../static/api/like.json'
  import Scroll from '../baseComponents/Scroll.vue'
  export default {
    components: {
      Scroll
    },
    data () {
      return {
        lists: [],
        songs: []
      }
    },
    computed: {
      activeIndex () {
        return this.$store.state.show.activeIndex
      }
    },
    created () {
      this.lists = resData.data;
      this.getList();
    },
    methods: {
      getList () {
        if(this.activeIndex) {
          this.songs = this.lists.listen;
        } else{
          this.songs = this.lists.like;
        }
      }
    },
    watch: {
      activeIndex () {
        this.getList();
      }
    }
  }
</script>

<style>

</style>
