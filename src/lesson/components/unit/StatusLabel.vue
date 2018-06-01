<template>
  <div class="c-lesson-status-label flex-row" :class="status">
    {{label}}
  </div>
</template>

<script>
  export default {
    name: 'lesson-status-label',
    props: ['status'],
    data() {
      return {
        dict: {
          opened: '开放中',
          onlive: '直播中',
          repose: '交流中',
          finish: '可观看',
          closed: '已下架'
        }
      }
    },
    computed: {
      label: function() {
        return this.dict[this.status] || this.status
      }
    }
  }
</script>

<style scoped>
  .c-lesson-status-label {
    height: .36rem;
    padding: 0 .15rem;
    border-radius: .18rem;
    color: #fff;
    font-size: .21rem;
    text-align: center;
  }
  .opened {
    background: #D8C199;
  }
  .onlive {
    background: #5DC96A;
  }
  .finish {
    background: #FF7E7E;
  }

</style>
