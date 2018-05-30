<template>
  <div class="c-lesson-detail-cover">
    <img class="cover" :src="cover"/>
    <div class="enrollment">
      <i class="icon-yike icon-my-selected"></i>
      <span>{{enrollment}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'lesson-detail-cover',
    props: ['cover', 'enrollment']
  }
</script>

<style scoped>
  .c-lesson-detail-cover {
    position: relative;
  }
  img.cover {
    width: 100%;
    height: 4rem;
  }
  div.enrollment {
    position: absolute;
    left: .32rem;
    bottom: .24rem;
    font-size: .24rem;
    font-weight: bold;
    color: #fff;
  }
  .enrollment > i {
    font-size: .24rem;
  }

</style>
