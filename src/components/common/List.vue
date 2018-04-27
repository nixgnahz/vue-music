<template>
  <div class="mask">
    <div class="list_wrapper">
      <div class="play_type">
        <p>
          <span class="circle_wrap icon_type">
            <Icon type="shuffle" size="20" color="#ffcd32"></Icon>
          </span>
          <span class="text">随机播放</span>
        </p>
        <p v-show="false">
          <span class="circle_wrap">
            <Icon type="android-sync" size="20" color="#ffcd32"></Icon>
          </span>
          <span class="text">顺序播放</span>
        </p>
        <span class="empty">
          <Icon type="trash-a" size="20"></Icon>
        </span>
      </div>
      <ul>
        <li>
          <p class="current circle_wrap icon_play">
            <Icon class="scale" type="play" size="5" color="#ffcd32"></Icon>
          </p>
          <p class="title">Shut Up And Dance</p>
          <p class="action">
            <span>
              <Icon v-show="false" type="ios-heart-outline" size="15" color="#ffcd32"></Icon>
              <Icon type="ios-heart" size="15" color="#d93f30"></Icon>
            </span>
            <span class="remove">
              <Icon type="android-close" size="15" color="#ffcd32"></Icon>
            </span>
          </p>
        </li>
        <li>
          <p class="current circle_wrap icon_play">
            <Icon class="scale" type="play" size="5" color="#ffcd32"></Icon>
          </p>
          <p class="title">Shut Up And Dance</p>
          <p class="action">
            <span>
              <Icon v-show="false" type="ios-heart-outline" size="15" color="#ffcd32"></Icon>
              <Icon type="ios-heart" size="15" color="#d93f30"></Icon>
            </span>
            <span class="remove">
              <Icon type="android-close" size="15" color="#ffcd32"></Icon>
            </span>
          </p>
        </li>
        <li>
          <p class="current circle_wrap icon_play">
            <Icon class="scale" type="play" size="5" color="#ffcd32"></Icon>
          </p>
          <p class="title">Shut Up And Dance</p>
          <p class="action">
            <span>
              <Icon v-show="false" type="ios-heart-outline" size="15" color="#ffcd32"></Icon>
              <Icon type="ios-heart" size="15" color="#d93f30"></Icon>
            </span>
            <span class="remove">
              <Icon type="android-close" size="15" color="#ffcd32"></Icon>
            </span>
          </p>
        </li>
        <li>
          <p class="current circle_wrap icon_play">
            <Icon class="scale" type="play" size="5" color="#ffcd32"></Icon>
          </p>
          <p class="title">Shut Up And Dance</p>
          <p class="action">
            <span>
              <Icon v-show="false" type="ios-heart-outline" size="15" color="#ffcd32"></Icon>
              <Icon type="ios-heart" size="15" color="#d93f30"></Icon>
            </span>
            <span class="remove">
              <Icon type="android-close" size="15" color="#ffcd32"></Icon>
            </span>
          </p>
        </li>
      </ul>
      <div class="btn_wrapper">
        <div class="btn">
          <Icon type="plus-round"></Icon>
          <span>添加歌曲到队列</span>
        </div>
      </div>
      <div class="close">关闭</div>
    </div>
  </div>
</template>

<script>

</script>

<style>
  .mask {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 200;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .list_wrapper {
    position: absolute;
    bottom: 0px;
    background-color: #333;
    color: #aaa;
    width: 100%;
  }

  .list_wrapper .play_type {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 1rem 0.5rem;
  }

  .list_wrapper .play_type p {
    display: flex;
    align-items: center;
  }

  .list_wrapper .circle_wrap {
    border-radius: 50%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    border: 1px solid #ffcd32;
  }

  .list_wrapper .icon_type {
    width: 30px;
    height: 30px;
  }

  .list_wrapper .icon_play {
    width: 10px;
    height: 10px;
  }

  .list_wrapper .scale {
    transform: scale(0.5);
  }

  .list_wrapper .play_type p .text {
    margin-left: 0.5rem;
  }

  .list_wrapper ul {
    padding: 0rem 1rem;
  }

  .list_wrapper ul li {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin: 0.6rem 0px;
  }

  .list_wrapper ul li .title {
    flex: 1;
    margin-left: 0.5rem;
    font-size: 0.7rem;
  }

  .list_wrapper .action .remove {
    margin-left: 0.25rem;
  }

  .list_wrapper .btn_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.25rem 0px;
  }

  .list_wrapper .btn {
    width: 7rem;
    height: 1.5rem;
    border-radius: 0.75rem;
    border: 1px solid #aaa;
    text-align: center;
    line-height: 1.5rem;
  }

  .list_wrapper .close {
    text-align: center;
    height: 40px;
    line-height: 40px;
    background: #222;
    color: #aaa;
    font-size: 0.7rem;
  }
</style>
