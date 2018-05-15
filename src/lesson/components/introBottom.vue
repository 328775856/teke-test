<template>
  <div class="c-introBottom">
    <div class="frm-tips flex-row" @click="show">
      <div class="text">
        <i class="icon-yike icon-select"> 永久回放</i>
        <i class="icon-yike icon-select"> 无条件退款</i>
        <i class="icon-yike icon-select"> 图文语音</i>
      </div>
      <i class="icon-yike icon-arrow-r"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "introBottom",
    methods: {
      show() {
        this.$emit('show')
      }
    }
  }
</script>

<style scoped>
  .frm-tips {
    justify-content: space-between;
    height: 0.8rem;
    line-height: 0.8rem;
    padding: 0 0.3rem;
    background: #FFFCF5;
    color: #999999;
  }

  .text i {
    font-size: 0.24rem;
    margin-right: .2rem;
  }

  .text + i {
    color: #999999;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }

  .icon-arrow-r:before {
    font-size: 0.24rem;
    font-weight: bold;
    text-align: right;
  }
</style>
