<template>
  <transition name="drop">
    <div class="top_tip">
      <slot></slot>
    </div>
  </transition>
</template>

<script>

</script>

<style>
  .top_tip {
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 5000;
    background-color: #444;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    padding: 0.35rem 0px;
  }

  .drop-enter-active, .drop-leave-active {
    transition: all 0.3s ease;
  }

  .drop-enter, .drop-leave-to {
    transform: translate3d(0, -100%, 0)
  }
</style>
