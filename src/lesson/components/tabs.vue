<template>
  <div class="c-tabs">
    <div class="tab">
      <div :class="{active:isActive}" @click="active">课程</div>
      <div :class="{active:!isActive}" @click="active">目录</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabs",
    data() {
      return {
        isActive: true
      }
    },
    methods: {
      active() {
        this.isActive = !this.isActive
      }
    }
  }
</script>

<style scoped>

  .tab {
    display: flex;
    align-items: center;
    width: 7.5rem;
    height: 1rem;
    border-bottom: 0.01rem #DDDDDD solid;
    font-size: 0.36rem;
    color: #666666;
    text-align: center;
    -webkit-tap-highlight-color: transparent;
  }

  .tab div {
    position: relative;
    flex: 1;
    height: 1rem;
    line-height: 1rem;
    cursor: pointer;
  }

  .active {
    color: #2F57DA;
  }

  .active:after {
    content: '';
    position: absolute;
    left: 1.4rem;
    top: 0.96rem;
    width: 1rem;
    height: 0.04rem;
    background: #2F57DA;
    border-radius: 0.02rem;
  }

</style>
