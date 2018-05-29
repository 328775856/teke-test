<template>
  <div class="c-invite-list"  @click="invite">
    <div class="title invite flex-row">邀请达人榜
      <div class="icon flex-row">
        <span class="pie-r"></span>
        <span class="pie-b"></span>
        <span class="pie-y"></span>
        <span class="icon-yike icon-arrow-r"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "invite-list",
    props: ['sn'],
    methods: {
      invite() {
        location.href = `https://student.sandbox.yike.fm/?v=1#/course/rank/${this.sn}`
      }
    }
  }
</script>

<style scoped>
  .invite {
    margin: 0.2rem 0;
    justify-content: space-between;
  }

  .invite > div span:last-child {
    color: #808080;
    font-weight: bold;
    margin-left: 0.06rem;
    text-align: right;
  }

  .invite .icon-arrow-r:before {
  }

  .invite .pie-r, .invite .pie-b, .invite .pie-y {
    display: block;
    border-radius: 0.3rem;
    border-width: 0.3rem;
    margin-left: 0.1rem;
  }
</style>
