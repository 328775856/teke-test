<template>
  <div class="series-btn">
    <div class="frm-btn flex-row">
      <div class="home button flex-col flex-item ">
        <i class="icon-yike icon-home"></i>
        <span>首页</span>
      </div>
      <div class="favorite button flex-col flex-item ">
        <i class="icon-yike icon-favorite"></i>
        <span>收藏</span>
      </div>
      <button class="enroll button" @click="purchase">报名系列课</button>
    </div>
  </div>
</template>

<script>

  export default {
    name: "bottom-btn",
    data() {
      return {}
    },
    methods: {
      purchase() {
        this.$emit('payShow')
      }
    }
  }
</script>

<style scoped>
  .frm-btn {
    height: 1rem;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
  }

  .button {
    height: 100%;
    margin: 0;
    border: 0;
    -webkit-tap-highlight-color: transparent;
  }

  .home, .favorite {
    font-size: 0.2rem;
    color: #666666;
    background: white;
  }

  .icon-yike:before {
    font-size: 0.5rem;
    color: #2F57DA;
  }

  .enroll {
    flex: 5.5;
    background: #2F57DA;
    color: white;
    font-size: 0.32rem;
    letter-spacing: 0.02rem;
  }

</style>
