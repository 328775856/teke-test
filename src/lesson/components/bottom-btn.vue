<template>
  <div class="c-bottom">
    <div class="bottom-btn flex-row">
      <div class="home button flex-col flex-item icon-yike icon-home">首页</div>
      <div class="favorite button flex-col flex-item  icon-yike icon-favorite">收藏</div>
      <!--单课内容-->
      <div class="chat button flex-col flex-item  icon-yike icon-chat" v-if="single">交流</div>
      <!--单课内容结束-->
      <button class="enroll button" v-if="single">立即报名</button>
      <button class="enroll button" v-else>报名系列课</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "bottom-btn",
    props: ['single'],
    data() {
      return {
      }
    }
  }
</script>

<style scoped>
  .bottom-btn {
    height: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
  }

  .button {
    height: 100%;
    margin: 0;
    border: 0;
    -webkit-tap-highlight-color: transparent;
  }

  .home, .favorite, .chat {
    font-size: 0.2rem;
    color: #666666;
    background: white;
  }

  .icon-home:before, .icon-favorite:before, .chat:before {
    font-size: 0.5rem;
    color: #2F57DA;
  }

  .enroll {
    flex: 5.5;
    background: rgba(47, 87, 218, 1);
    color: white;
    font-size: 0.32rem;
    letter-spacing: 0.02rem;
  }

</style>
