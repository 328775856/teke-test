<template>
  <div class="c-introduce">
    <div class="container">
      <div class="frm-img">
        <div class="list-content">
          <i class="icon-yike icon-information"></i>234
        </div>
      </div>
      <div class="frm-content">
        <div class="title">从零到一起飞 Shopify × Facebook</div>
        <div class="lesson-time">
          <p class="icon-yike icon-clock">周三开课 0/3节</p>
        </div>
        <div class="price">
          <div class="tag">
            <p>特价特惠</p>
          </div>
          <div class="n-price">￥149</div>
          <div class="o-price">￥167</div>
        </div>
      </div>
      <div class="frm-tips">
        <span class="icon-yike icon-ok"> 永久回放</span>
        <span class="icon-yike icon-ok"> 无条件退款</span>
        <span class="icon-yike icon-ok"> 图文语音</span>
        <span class="icon-yike icon-arrow-r" style="font-weight: bolder"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "introduce.vue"
  }
</script>

<style scoped>
  p{
    margin: 0px;
  }
  .icon-clock:before {
    display: inline-block;
    position: relative;
    top: .06rem;
    left: -0.1rem;
    font-size: .5rem;
    color:rgba(47,87,218,1);
    transform: rotateY(180grad);
  }
  .icon-information:before {
    padding-right: .05rem;
  }
  .container {
    display: flex;
    flex-flow: column nowrap;
  }

  .frm-img {
    width: 7.5rem;
    height: 4rem;
  }

  .list-content {
    padding-top: 3rem;
  }

  .frm-content {
    width: 7.5rem;
    height: 2.3rem;
    padding-left: 0.5rem;
    background: rgba(255, 255, 255, 1);
  }
  .frm-content>div{
    margin: .325rem 0px;
  }
  .title {
    width: 5.85rem;
    height: 0.38rem;
    font-size: 0.36rem;
    font-family: PingFangSC-Bold;
    color: rgba(13, 13, 13, 1);
    line-height: 0.38rem;
  }

  .lesson-time {
    height: 0.3rem;
    background: rgba(255, 255, 255, 1);
    line-height: 0.3rem;
  }
  .lesson-time p{
    width:2.21rem;
    height:0.23rem;
    font-size:0.24rem;
    font-family:PingFangSC-Medium;
    color:rgba(128,128,128,1);
    line-height:0.23rem;
  }
  .price {
    display: flex;
    flex-flow: row nowrap;
    height: 0.32rem;
  }
  .price div{
    padding-left: 0.3rem;
  }

  .tag {
    position: relative;
    width: 0.57rem;
    border: rgba(242, 63, 21, 1) 0.18rem solid;
    border-right: 0.11rem solid transparent;
  }
  .tag  p{
    position: absolute;
    left: 0rem;
    z-index: 999;
    font-size:0.2rem;
    font-family:PingFangSC-Medium;
    color:rgba(254,254,254,1);
    line-height:0rem;
  }
  .n-price {
    width: 1.1rem;
    height: 0.32rem;
    font-size: 0.42rem;
    font-family: PingFangSC-Bold;
    color: rgba(242, 63, 21, 1);
    line-height: 0.32rem;
  }
  .o-price{
    width:0.79rem;
    height:0.21rem;
    font-size:0.27rem;
    font-family:PingFangSC-Medium;
    text-decoration: line-through;
    color:rgba(128,128,128,1);
    line-height:0.36rem;
  }
  .frm-tips {
    width: 7.5rem;
    height: 0.8rem;
    line-height: 0.8rem;
    padding-left: 0.5rem;
    background: rgba(255, 252, 245, 1);
    color: #999999;
  }

  .frm-tips span {
    width: 0.96rem;
    height: 0.23rem;
    font-size: 0.24rem;
    font-family: PingFangSC-Medium;
    color: rgba(153, 153, 153, 1);
    margin-right: .2rem;
  }

  .frm-tips span:nth-child(4) {
    margin-left: 1.4rem;
  }
</style>
