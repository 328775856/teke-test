<template>
    <div class="c-introBottom">
      <div class="frm-tips flex-row">
        <div class="text">
          <i class="icon-yike icon-select"> 永久回放</i>
          <i class="icon-yike icon-select"> 无条件退款</i>
          <i class="icon-yike icon-select"> 图文语音</i>
        </div>
        <a class="icon-yike icon-arrow-r" href=""></a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "introBottom"
    }
</script>

<style scoped>
  .frm-tips{
    justify-content: space-between;
    height: 0.8rem;
    padding: 0 0.3rem;
    background: #FFFCF5;
    color: #999999;
  }
  .frm-tips i {
    font-size: 0.24rem;
    margin-right: .2rem;
  }

  .frm-tips a {
    position: relative;
    width: 0.3rem;
    height: 0.3rem;
    color: #999999;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }

  .icon-arrow-r:before {
    position: absolute;
    top: 0.04rem;
    width: 0.3rem;
    height: 0.3rem;
    font-size: 0.24rem;
    font-weight: bold;
    text-align: right;
  }
</style>
