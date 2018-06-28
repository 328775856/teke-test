<template>
  <div class="c-lesson-status-label" :class="status">
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
          opened: '报名中',
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
    padding: 0 .5em;
    border-radius: 1em;
    color: #fff;
    font-size: .22rem;
    text-align: center;
    line-height: 1.8em;
  }
  .opened {
    /*background: #D8C199;*/
    color: #2F57DA;
    border: 1px solid #2F57DA;
    background: #fff;
  }
  .onlive, .repose{
    background: #5DC96A;
  }
  .finish {
    background: #2F57DA;
  }
  .close {
    background: #FF7E7E;
  }

</style>
