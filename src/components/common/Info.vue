<template>
  <div class="info" :style="{backgroundImage: 'url(' +  info.cover +')'}">
    <div class="filter">
      <div class="top">
        <span>
          <Icon class="back_icon" type="ios-arrow-back" size="35" color="#ffcd32"></Icon>
        </span>
        <p class="name">{{info.name}}</p>
      </div>
      <div class="play_wrapper">
        <div class="play_btn">
          <Icon type="play"></Icon>
          <span>随机播放全部</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 export default {
   props: ["info"]
 }
</script>

<style>
  .info {
    width: 100%;
    height: 40%;
    background-size: cover;
    background-position: center;
    position: relative;
  }

  .info .filter {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(7, 17, 27, 0.4);
  }

  .info .top {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    padding: 0.45rem;
  }

  .info .top .name {
    font-size: 0.8rem;
    font-weight: 800;
  }

  .info .top .back_icon {
    position: absolute;
    top: 0.25rem;
    left: 0.25rem;
  }

  .play_wrapper {
    width: 100%;
    position: absolute;
    bottom: 1rem;
  }

  .info .play_btn {
    width: 6rem;
    height: 1.6rem;
    border: 1px solid #ffcd32;
    border-radius: 0.8rem;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin: auto;
    color: #ffcd32;
  }

  .info .play_btn span {
    margin-left: 0.5rem;
  }
</style>
