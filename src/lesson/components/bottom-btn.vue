<template>
  <div class="c-bottom">
    <div class="bottom-btn flex-row">
      <div class="home button flex-col flex-item icon-yike icon-home">首页</div>
      <div class="like button flex-col flex-item  icon-yike icon-like">收藏</div>
      <button class="enroll button">报名系列课</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "bottom-btn"
  }
</script>

<style scoped>
  .bottom-btn {
    height: 1rem;
  }

  .button {
    height: 100%;
    margin: 0;
    border: 0;
    -webkit-tap-highlight-color: transparent;
  }

  .home, .like{
    font-size: 0.2rem;
    color: #666666;
    background: white;
  }
  .icon-home:before, .icon-like:before{
    font-size: 0.5rem;
    color: #2F57DA;
  }

  .enroll {
    flex: 5.5;
    background: rgba(47, 87, 218, 1);
    color: white;
    font-size:0.32rem;
    letter-spacing: 0.02rem;
  }

</style>
