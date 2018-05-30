<template>
  <div class="c-detail-profile">
    <div class="cover">
      <img :src="profile.cover"/>
      <div class="enrollment">
        <i class="icon-yike icon-my-selected"></i>
        <span>{{profile.enrollment}}</span>
      </div>
    </div>
    <div class="title">{{profile.title}}</div>
  </div>
</template>

<script>
  export default {
    name: 'lesson-detail-profile',
    props: ['profile']
  }
</script>

<style scoped>
  .c-detail-profile {
    background: #fff;
  }
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
  .title {
    padding: .4rem .32rem;
    font-size: .36rem;
    font-weight: bold;
    color: #0D0D0D;
  }
</style>
