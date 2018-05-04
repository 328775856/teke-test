<template>
  <div class="c-introduce">
    <div class="container">
      <a  :href="introData.target" >
        <img class="frm-img" :src="introData.cover">
      </a>
      <div class="icon-yike icon-my-selected people">
        <div class="icon-yike icon-my-selected"></div>
      </div>
      <div class="enroll">{{introData.enrollment}}人</div>
      <div class="frm-content">
        <div class="title">{{introData.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "introduce",
    props: ['introData'],
    data() {
      return {
      }
    },
    created() {
    }
  }
</script>

<style scoped>
  .c-introduce{
    background: white;
  }
  .container {
    position: relative;
  }

  /*people 图标*/
  .people {
    position: absolute;
    top: 3.6rem;
    left: 0.32rem;
    font-size: 0.24rem;
    line-height: 0.36rem;
    color: white;
  }

  .people:before {
    position: absolute;
    left: -0.1rem;
    color: #fff;
    font-size: 0.25rem;
    z-index: 2;
  }

  .icon-my-selected .icon-my-selected:before {
    position: absolute;
    color: #ccc;
    font-size: 0.2rem;
  }

  .icon-arrow-r {
    font-weight: bolder;
  }

  p {
    margin: 0px;
  }

  .icon-information:before {
    padding-right: .05rem;
  }

  a {
    display: inline-block;
    width: 100%;
    height: 4rem;
  }

  .frm-img {
    width: 7.5rem;
    height: 4rem;
  }

  .enroll {
    position: absolute;
    top: 3.58rem;
    left: 0.65rem;
    font-size: 0.24rem;
    color: white;
  }

  .frm-content {
    width: 6.9rem;
    padding: 0.3rem 0.3rem 0 0.3rem;
  }

  .title {
    width: 5.85rem;
    height: 0.38rem;
    font-size: 0.36rem;
    color: rgba(13, 13, 13, 1);
    line-height: 0.38rem;
  }
</style>
