<template>
  <div class="c-detail-profile">
    <div class="cover">
      <img :src="profile.cover"/>
      <div class="enrollment">
        <i class="icon-yike icon-people"></i>
        <span class="text-desc font-bold">{{profile.enrollment}}人</span>
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
    height: 4rem;
  }

  .cover > img {
    width: 100%;
    height: 4rem;
  }

  .enrollment {
    position: absolute;
    left: .32rem;
    bottom: .24rem;
    font-weight: bold;
    color: #fff;
    text-shadow: 0 0 .05rem #333;
  }

  .icon-people {
    font-size: .28rem;
  }

  .icon-people + span {
    color: #fff;
  }
</style>
