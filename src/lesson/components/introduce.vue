<template>
  <div class="c-introduce">
    <div class="container">
      <a  :href="introData.target" >
        <img class="frm-img" :src="introData.cover">
        <div class="enroll-frm flex-row">
          <div class="people flex-row">
            <i class="icon-yike icon-my-selected"></i>
            <i class="icon-yike icon-my-selected"></i>
          </div>
          <div class="enroll">{{introData.enrollment}}人</div>
        </div>
      </a>
      <div class="frm-content">
        <div class="course-title">{{introData.title}}</div>
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
.enroll-frm{
  position: absolute;
  top: 3.6rem;
  left: 0.32rem;
}
  /*people 图标*/
  .people {
    height: 0.28rem;
  }
  .people i:first-child{
    position: relative;
    z-index: 1;
    color: #fff;
    font-size: 0.3rem;
  }
  .people i:last-child{
    z-index: 0;
    position: absolute;
    left: 0.16rem;
    top: 0.01rem;
    height: 0.28rem;
    line-height: 0.33rem;
    color: #DADADB;
    font-size: 0.24rem;
  }
  .icon-arrow-r {
    font-weight: bolder;
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
    padding-left: 0.3rem;
    font-size: 0.24rem;
    color: white;
  }

  .frm-content {
    width: 6.9rem;
    padding: 0.3rem 0.3rem 0 0.3rem;
  }

  .course-title {
    width: 5.85rem;
    height: 0.38rem;
    font-size: 0.36rem;
    color: #0D0D0D;
    line-height: 0.38rem;
  }
</style>
