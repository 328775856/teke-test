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
          <i class="icon-yike icon-gift"></i>
        </div>
        <div class="price">
          <div class="tag">
            <p>特价特惠</p>
          </div>
          <div class="n-price">￥149</div>
          <div class="o-price">￥167</div>
          <div>邀请有奖</div>
        </div>
      </div>
      <div class="frm-tips">
        <span class="icon-yike icon-ok"> 永久回放</span>
        <span class="icon-yike icon-ok"> 无条件退款</span>
        <span class="icon-yike icon-ok"> 图文语音</span>
        <span class="icon-yike icon-arrow-r"></span>
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
  .icon-arrow-r {
    font-weight: bolder;
  }
  p{
    margin: 0px;
  }
  .icon-clock:before {
    display: inline-block;
    position: relative;
    left: -0.1rem;
    font-size: 0.5rem;
    color:rgba(47,87,218,1);
  }
  .icon-information:before {
    padding-right: .05rem;
  }
  .container {
    display: flex;
    flex-flow: column nowrap;
    background:rgba(255,255,255,1);
  }

  .frm-img {
    width: 7.5rem;
    height: 4rem;
  }

  .list-content {
    padding-top: 3rem;
  }

  .frm-content {
    width: 6.9rem;
    height: 1.9rem;
    padding:0.4rem 0.3rem 0 0.3rem;
  }
  .title {
    width: 5.85rem;
    height: 0.38rem;
    font-size: 0.36rem;
    color: rgba(13, 13, 13, 1);
    line-height: 0.38rem;
  }

  .lesson-time {
    height: 0.8rem;
    line-height: 0.8rem;
  }
  .lesson-time p{
    display: flex;
    flex-flow: row;
    width:2.21rem;
    height:0.23rem;
    font-size:0.24rem;
    color:rgba(128,128,128,1);
  }
  .lesson-time i{
    width:0.54rem;
    height:0.54rem;
    padding-left: 6.22rem;
  }
  .price {
    display: flex;
    flex-flow: row nowrap;
    height: 0.36rem;
  }

  .tag {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width:0.8rem;
    border: rgba(242, 63, 21, 1) 0.19rem solid;
    border-right: 0.11rem solid transparent;
  }
  .tag  p{
    position: absolute;
    z-index: 999;
    left: -0.05rem;
    width: 0.8rem;
    height: 0.2rem;
    font-size:0.18rem;
    color:rgba(254,254,254,1);
    line-height:0.2rem;
  }
  .n-price {
    width: 1.1rem;
    height: 0.32rem;
    padding-left: 0.31rem;
    font-size: 0.42rem;
    color: rgba(242, 63, 21, 1);
    line-height: 0.32rem;
  }
  .o-price{
    width:0.79rem;
    height:0.21rem;
    font-size:0.27rem;
    padding-left: 0.2rem;
    text-decoration: line-through;
    color:rgba(128,128,128,1);
    line-height:0.36rem;
  }
  .o-price+div{
    width:0.96rem;
    height:0.23rem;
    padding-left: 2.45rem;
    font-size: 0.2rem;
    color:rgba(102,102,102,1);
  }
  .frm-tips {
    height: 0.8rem;
    line-height: 0.8rem;
    padding: 0 0.3rem;
    background: rgba(255, 252, 245, 1);
    color: #999999;
  }

  .frm-tips span {
    width: 0.96rem;
    height: 0.3rem;
    font-size: 0.24rem;
    font-family: PingFangSC-Medium;
    color: rgba(153, 153, 153, 1);
    margin-right: .2rem;
  }

  .frm-tips span:nth-child(4) {
    float: right;
    width: 0.3rem;
    height: 0.3rem;
    margin-left: 1.4rem;
    padding-right: 0.3rem;
  }
  .icon-ok:before {
    width: 0.24rem;
    height: 0.24rem;
  }
</style>
