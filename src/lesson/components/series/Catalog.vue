<template>
  <div class="c-contents">
    <div class="box flex-col" v-for="(item,index) in catalogData" :key="index" ref="num">
      <div class="frm-content flex-row">
        <div class="img">
          <img class="img" :src="item.cover">
        </div>
        <div class="content flex-col">
          <div class="text flex-row">
            <span class="msg">{{item.title}}</span>
            <div class="status flex-col">
              <button :class="item.status">{{courseStatus[item.status]}}</button>
              <div class="price">￥{{item.price}}</div>
            </div>
          </div>
          <div class="time flex-row">
            <div class="icon-frm flex-row">
              <div class="people">
                <i class="icon-yike icon-my-selected"></i>
                <i class="icon-yike icon-my-selected"></i>
              </div>
              <span class="enroll">{{item.enrollment}}人</span>
            </div>
            <span>{{item.plan.dtm_start}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "Catalog",
    props: ['catalogData'],
    data() {
      return {
        courseStatus: {
          opened: '开放中',
          onlive: '直播中',
          repose: '交流中',
          finish: '可观看',
          closed: '已下架'
        }
      }
    },
    methods: {}
  }
</script>

<style scoped>

  p {
    margin: 0;
  }

  .c-contents {
    width: 100%;
    background: #fff;
  }

  .box {
    padding: 0 0.3rem;
  }

  .frm-content {
    justify-content: flex-start;
    width: 100%;
    padding: 0.3rem 0;
    border-bottom: 1px solid #DDDDDD;
  }

  .img {
    width: 2.4rem;
    height: 1.28rem;
    border: 0.01rem #DDDDDD solid;
  }

  .content {
    justify-content: space-between;
    width: 4.19rem;
    height: 1.30rem;
    margin-left: 0.3rem;
    text-align: left;
  }

  .content > div {
    width: 4.19rem;
  }

  .text {
    justify-content: space-between;
    align-items: flex-start;
  }

  .text div:first-child {
    color: #0D0D0D;
  }

  .msg {
    height: 0.3rem;
    line-height: 0.3rem;
    font-size: 0.27rem;
    font-weight: bold;
  }

  .status {
    height: 0.81rem;
    justify-content: space-between;
    align-items: normal;
  }

  .text button {
    width: 1.1rem;
    height: 0.36rem;
    border-radius: 0.18rem;
    font-size: 0.2rem;
    color: #fff;
    line-height: 0.36rem;
    border: none;
  }

  .price {
    font-size: 0.3rem;
    color: #F23F15;
    line-height: 18px;
    text-align: right;
    padding-right: 0.02rem;
  }

  .time {
    justify-content: space-between;
    width: 4.19rem;
    height: 0.2rem;
    font-size: 0.24rem;
    line-height: 0.28rem;
    color: #0D0D0D;
  }

  /*people 图标*/
  .people {
    position: relative;
  }

  .people i:first-child {
    z-index: 1;
    position: relative;
    left: 0;
    color: #999;
    font-size: 0.3rem;
  }

  .people i:last-child {
    z-index: 0;
    position: absolute;
    left: 0.16rem;
    top: 0.01rem;
    color: #ccc;
    font-size: 0.24rem;
  }

  .enroll {
    color: #808080;
    font-size: 0.24rem;
    padding-left: 0.21rem;
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
