<template>
  <div class="c-contents">
    <div class="title">目录</div>
    <div class="box">
      <div class="">1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Contents.vue"
    }
</script>

<style scoped>
  .title {
    width: 7.5rem;
    height: 0.36rem;
    font-size: 0.32rem;
    padding: 0.32rem 0;
    padding-left: 0.31rem;
    line-height: 0.36rem;
  }

  .title:before {
    content: '';
    position: absolute;
    left: 0;
    width: 0.1rem;
    height: 0.36rem;
    background: #2F57DA
  }

  .c-contents{
    width:7.5rem;
    height:6.64rem;
    background:rgba(255,255,255,1);
  }
  .box{
    width: 6.9rem;
    padding: 0 0.3rem;
  }
</style>
