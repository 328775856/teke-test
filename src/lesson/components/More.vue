<template>
  <div class="c-top">
    <b>推荐课程</b>
    <a @click="$emit('showMore')">查看更多></a>
  </div>
</template>

<script>
  export default {
    name: "top-fixed.vue",
    props: ['more'],
    data() {
      return {
        top: 100
      }
    },
    methods: {
      show() {
        console.log('123')
        this.$emit('showMore');
      }
    }
  }
</script>

<style scoped>
  .c-top {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 700px;
    height: 60px;
    margin: 0 auto;
    text-align: center;
    line-height: 60px;
    background: rgba(15, 200, 195, .3);
    /*position: fixed;*/
    /*z-index: 2;*/
  }

  .c-top a {
    text-decoration: none;
    color: black;
    padding: 0 10px;
    cursor: pointer;
    color: #fff;
  }

  .c-top b {
    margin: 0;
    padding: 0 10px;
    color: #fff;
  }
</style>
