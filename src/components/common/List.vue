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
      <div class="wrapper">
        <ul>
          <li v-for="n in 10">
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
      </div>
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

</style>
