<template>
  <div class="c-detail-profile">
    <div class="cover">
      <img :src="profile.cover"/>
      <div class="enrollment">
        <i class="icon-yike icon-my-selected"></i>
        <span>{{profile.enrollment}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'lesson-detail-cover',
    props: ['profile']
  }
</script>

<style scoped>
  .cover {
    position: relative;
  }
  .cover > img {
    width: 100%;
    height: 4rem;
  }
  .enrollment {
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
