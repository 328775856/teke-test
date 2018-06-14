<template>
  <div class="c-tabs flex-col">
    <div class="tab">
        {{tabs[idx]}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabs",
    props: ['tabs', 'idx'],
    data() {
      return {
        isActive: 0
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  .c-tabs {
    flex: 1;
    cursor: pointer;
  }

  .tab {
    height: 1rem;
    line-height: 1rem;
    font-size: 0.36rem;
    color: #666666;
    text-align: center;
    -webkit-tap-highlight-color: transparent;
  }
  .active {
    color: #2F57DA;
  }
  .active:after {
    content: '';
    position: absolute;
    top: 0.96rem;
    width: 1rem;
    height: 0.04rem;
    background: #2F57DA;
    border-radius: 0.02rem;
  }

</style>
