<template>
  <transition name="scale">
    <div class="confirm-wrapper">
      <div class="confirm-content">
        <p class="title">{{title}}</p>
        <div class="btn">
          <p @click="confirm">{{confirmText}}</p>
          <p @click="cancel">{{cancelText}}</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
        default: '温馨提示'
      },
      confirmText: {
        type: String,
        default: '确定'
      },
      cancelText: {
        type: String,
        default: '取消'
      }
    },
    methods: {
      confirm () {
        this.$emit('confirm')
      },
      cancel () {
        this.$emit('cancel')
      }
    }
  }
</script>

<style>
 .confirm-wrapper {
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    z-index: 998;
    background-color: rgba(0, 0 , 0, 0.3);
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
  }

  .confirm-wrapper .confirm-content {
    width: 260px;
    background-color: #444;
    border-radius: 10px;
    font-size: 0.65rem;
    text-align: center;
  }

  .confirm-wrapper .confirm-content .title {
    padding: 15px 0px;
  }

  .confirm-wrapper .confirm-content .btn {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
  }

  .confirm-wrapper .confirm-content .btn p {
    flex: 1;
    padding: 10px 0px;
    border-right: 1px solid rgba(0, 0, 0, 0.3);
  }

  .confirm-wrapper .confirm-content .btn p:last-child {
    border: 0px;
  }

  .scale-enter-active {
    animation: confirm-opacity 0.3s;
  }

  .scale-enter-active .confirm-content {
    animation: confirm-scale 0.3s;
  }

  @keyframes confirm-opacity {
    0% {
      opacity: 0;
    }
    100% {
       opacity: 1;
    }
  }

  @keyframes confirm-scale {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
