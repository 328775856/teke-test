<template>
  <div class="c-bottom">
    <div class="bottom-btn flex-row">
      <button class="home flex-item icon-yike icon-home">首页</button>
      <button class="like flex-item  icon-yike icon-like">收藏</button>
      <button class="enroll">报名系列课</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "bottom"
  }
</script>

<style scoped>
  .c-bottom{
    position: sticky;
    bottom: 0;
  }
  .bottom-btn {
    height: 1rem;
  }

  button {
    height: 100%;
    margin: 0;
    border: 0;
    -webkit-tap-highlight-color: transparent;
  }

  .home, .like{
    position: relative;
    font-size: 10px;
    color: #666666;
    background: white;
    line-height: 3px;
    padding-top: 0.69rem;
  }
  .icon-home:before, .icon-like:before{
    position: absolute;
    top: 0.3rem;
    right:0.5rem;
    font-size: 25px;
    color: #2F57DA;
  }

  .enroll {
    flex: 5.5;
    background: rgba(47, 87, 218, 1);
    color: white;
    font-size:16px;
  }

</style>
