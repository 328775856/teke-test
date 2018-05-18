<template>
  <div class="c-contents">
    <div class="box flex-col" v-for="(item,index) in catalogData" :key="index" ref="num">
      <div class="frm-content flex-row">
        <div class="img">
          <img class="img" :src="item.cover">
        </div>
        <div class="content flex-col">
          <div class="text flex-row">
            <div class="msg">{{item.title}}</div>
            <div class="status flex-col">
              <button :class="item.status">{{item.status | status}}</button>
              <div class="price">￥{{item.price}}</div>
            </div>
          </div>
          <div class="time flex-row">
            <i class="icon-yike icon-my-selected people">
              <i class="icon-yike icon-my-selected"></i>
            </i>
            <div class="enroll">{{item.enrollment}}人</div>
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
      }
    },
    methods: {
    },
    created() {
    }
  }
</script>

<style scoped>
  /*people 图标*/
  .people{
    position: relative;
    font-size: 0.24rem;
  }
  .people.icon-my-selected:before {
    position: absolute;
    top: -0.17rem;
    left:  -0.1rem;
    color: #999999;
    font-size: 0.25rem;
    z-index: 2;
  }

  .icon-my-selected .icon-my-selected:before {
    position: absolute;
    top: -0.17rem;
    color: #CCCCCC;
    font-size: 0.2rem;
  }
  .enroll {
    position: absolute;
    left: 0.23rem;
    color: #808080;
    font-size: 0.24rem;
  }
  .enroll+span{
    color: #808080;
  }
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
    margin-left: 0.3rem;
    text-align: left;
  }

  .content > div {
    width: 4.19rem;
  }

  .text {
    justify-content: space-between;
  }

  .text div:first-child {
    color: #0D0D0D;
    line-height: 21px;
  }

  .msg {
    min-height: 0.81rem;
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
    position: relative;
    top: 0.1rem;
    justify-content: space-between;
    width: 4.19rem;
    height: 0.36rem;
    margin-top: 0.08rem;
    font-size: 0.24rem;
    line-height: 0.36rem;
    color: #0D0D0D;
  }
</style>
