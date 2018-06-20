<template>
  <div class="c-detail-profile">
    <div class="cover">
      <img :src="profile.cover"/>
      <div class="enrollment font-24">
        <i class="icon-yike icon-people font-24"></i>
        <span>{{profile.enrollment}}人</span>
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

</style>
