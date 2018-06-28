<template>
  <div id="idx-lesson" class="c-index">
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        transitionName: ''
      }
    },
    watch: {
      // 使用watch 监听$router的变化
      $route(to, from) {
        if (to.path === '/lesson/search') {
          this.transitionName = 'slide'
        }
      }
    }
  }
</script>

<style>

  .slide-enter-active, .slide-leave-active {
    transition: all .3s;
  }

  .slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    transform: translateX(100%);
  }
</style>
