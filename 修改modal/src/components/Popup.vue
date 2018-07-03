<template>
  <transition name="slide">
    <div class="c-popup flex-col" v-show="isOpen">
      <div class="frm-popup flex-col" :style="{width: width}">
        <div class="popup-head flex-row">
          <slot name="head">popup head</slot>
        </div>
        <div class="popup-body flex-item">
          <slot></slot>
        </div>
        <div class="popup-foot flex-row">
          <slot name="foot">popup food</slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'popup',
    props: ['isOpen'],
    methods: {
      close: function () {
        this.$emit('close')
      }
    },
    computed: {
      width: () => {
        return document.body.offsetWidth + 'px';
      }
    },
    watch: {
      isOpen: (status) => {
        alert(status)
        if (status) {
          document.documentElement.style.overflow = 'hidden'
          document.body.style.overflow = 'hidden'
        } else {
          document.body.style.overflow = 'visible'
          document.documentElement.style.overflow = 'auto'
        }
      }
    }
  }
</script>

<style scoped>
  .c-popup {
    position: fixed;
    justify-content: flex-end;
    z-index: 99;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .frm-popup {
    background: #fff;
    z-index: 999;
    border-radius: .2rem .2rem 0 0;
  }

  .popup-head {
    height: 1rem;
    font-size: .32rem;
    color: #0D0D0D;
  }

  .popup-body {
    width: 100%;
  }

  .popup-foot {
    height: 1rem;
    width: 100%;
    box-shadow: 0 0 0.1rem rgba(0, 0, 0, .1);
  }

  .slide-enter-active, .slide-leave-active {
    transition: all .3s;
  }

  .slide-enter, .slide-leave-to {
    transform: translateY(100%);
  }
</style>
