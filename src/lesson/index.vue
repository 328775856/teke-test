<template>
  <div id="idx-lesson" class="c-index">
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style>

  .fade-enter-active, .fade-leave-active {
    transition: all .3s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    transform: translateX(100%);
  }
</style>
