<template>
  <div class="c-lesson-detail-policy">
    <div class="bar-items flex-row">
      <div class="flex-row">
        <div class="item">
          <i class="icon-yike icon-select"></i>
          永久回放
        </div>
        <div class="item">
          <i class="icon-yike icon-select"></i>
          无条件退款
        </div>
        <div class="item">
          <i class="icon-yike icon-select"></i>
          图文语音
        </div>
      </div>
      <i class="icon-yike icon-arrow-r"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'lesson-detail-policy'
  }
</script>

<style scoped>
  .bar-items {
    justify-content: space-between;
    height: .8rem;
    padding: 0 .3rem;
    background: #FFFCF5;
    font-size: .24rem;
    color: #999;
  }

  .item {
    padding-right: .4rem;
    color: #999999;
  }

  .icon-select {
    display: inline-block;
    width: .24rem;
    height: .24rem;
    font-size: .23rem;
  }

  .icon-arrow-r:before{
    display: inline-block;
    color: #999;
    font-size: .24rem;
    font-weight: bold;
    text-align: right;
  }

</style>
