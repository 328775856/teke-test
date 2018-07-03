<template>
  <transition name="slide">
    <div class="photoViewer flex-col">
      <div class="mask" @click="close"></div>
      <div class="flex-row">
        <img :src="app.linkToAssets('/img/qrcode/yike-fm.png')"/>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "PhotoViewer",
    props: ['isPhotoShow'],
    methods: {
      close() {
        this.$emit('isPhotoShow')
      }
    }
  }
</script>

<style scoped>
  .photoViewer {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .mask {
    background: black;
  }

  .photoViewer > .flex-row {
    position: relative;
    z-index: 101;
    width: 100%;
  }

  .photoViewer > .flex-row > img {
    width: 2.5rem;
    height: 2.5rem;
  }

  .slide-enter-active, .slide-leave-active {
    transition: all .3s;
  }

  .slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    transform: translateX(100%);
  }
</style>
