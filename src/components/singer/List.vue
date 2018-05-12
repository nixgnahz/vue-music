<template>
  <div class="singer_list">
    <div class="menu" ref="menuWrapper">
      <ul>
        <li @click="changeSingerList(index, $event)" :class="[index == activeIndex ? 'active' : '']" v-for="(item, index) in singerList">{{item.label}}</li>
      </ul>
    </div>
    <div class="fixed_wrapper">
      <div class="content scroll_wrapper" ref="detailWrapper">
        <section>
          <ul class="details" v-for="itm in singerList">
            <p class="title">
              <span>{{itm.value}}</span>
            </p>
            <li v-for="(item, index) in itm.singers" @click="showSongs(index)">
              <div class="portrait" :style="{backgroundImage: 'url(' +  item.cover + ')'}"></div>
              <p class="name">{{item.name}}</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        singerList: [],
        listHeight: [],
        detailList: [],
        menuWrapper: {},
        detailWrapper: {},
        detailWrapperY: 0
      }
    },
    computed: {
      activeIndex() {
        for (let i = 0, l = this.listHeight.length; i < l; i++) {
          let topHeight = this.listHeight[i];
          let bottomHeight = this.listHeight[i + 1];
          if (!bottomHeight || (this.detailWrapperY >= topHeight && this.detailWrapperY < bottomHeight)) {
            return i;
          }
        }
        return 0;
      }
    },
    created() {
      axios.get('http://localhost:8080/static/api/singer.json').then((res) => {
        this.singerList = res.data.data;
        this.$nextTick(() => {
          this.calculateHeight();
          this.initScroll();
        })
      }).catch((error) => {
        console.log(error);
      })
    },
    methods: {
      showSongs(id) {
        this.$router.push({
          name: 'singerDetail',
          params: {
            id: id
          }
        })
      },
      calculateHeight() {
        this.detailList = this.$refs.detailWrapper.querySelectorAll('.details');
        let gap = 0;
        this.listHeight = [gap];
        for (let i = 0; i < this.detailList.length; i++) {
          gap += this.detailList[i].clientHeight;
          this.listHeight.push(gap);
        }
      },
      initScroll() {
        var self = this;
        this.menuWrapper = new BScroll(this.$refs.menuWrapper, {
          click: true
        })
        this.detailWrapper = new BScroll(this.$refs.detailWrapper, {
          click: true,
          probeType: 3
        })
        this.detailWrapper.on('scroll', function (pos) {
          self.detailWrapperY = Math.abs(Math.round(pos.y));
        })
      },
      changeSingerList(index, event) {
        if (!event._constructed) return;
        this.detailWrapper.scrollToElement(this.detailList[index], 300);
      }
    }
  }
</script>

<style>

</style>
