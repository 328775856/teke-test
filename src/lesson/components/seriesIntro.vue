<template>
    <div class="series-introduce">
      <div class="lesson-time flex-row">
      <p class="icon-yike icon-clock  flex-row">周三开课 {{introData.progress[0]}}/{{introData.progress[1]}}节</p>
      <i class="icon-yike icon-share"></i>
      </div>
      <div class="price">
      <div class="tag">
      <p>特价特惠</p>
      </div>
      <div class="n-price">￥{{introData.price}}</div>
      <div class="o-price">￥300</div>
      <div>邀请有奖</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "series",
      props: ['introData']
    }
</script>

<style scoped>
  .series-introduce{
    padding: 0 0.3rem;
  }
  .lesson-time {
    justify-content: space-between;
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
  }

  .lesson-time p {
    justify-content: flex-start;
    align-items: center;
    width: 80%;
    font-size: 0.24rem;
    color: rgba(128, 128, 128, 1);
  }

  .icon-clock:before {
    padding-right: 0.13rem;
    font-size: 0.33rem;
    color: rgba(47, 87, 218, 1);
  }
  .lesson-time button{
    width: 1.1rem;
    height: 0.36rem;
    margin-left: 0.21rem;
    border-radius: 0.18rem;
    font-size: 0.2rem;
    color: #fff;
    border: none;
  }
  .icon-share{
    justify-content: flex-end;
    height: 0.8rem;
    padding:0.4rem 0.14rem 0 0;
  }
  .icon-share:before {
    height: 0.8rem;
    font-size: 0.5rem;
    color: #2F57DA;
  }

  .price {
    display: flex;
    flex-flow: row nowrap;
    padding-bottom: 0.4rem;
  }

  .tag {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 0.8rem;
    background: #F23F15;
    border: rgba(242, 63, 21, 1) 0.19rem solid;
  }

  .tag:after {
    content: '';
    position: absolute;
    left: 0.8rem;
    border: rgba(242, 63, 21, 1) 0.19rem solid;
    border-right: 0.08rem solid transparent;
  }

  .tag p {
    position: absolute;
    z-index: 999;
<<<<<<< HEAD
    top: -0.28rem;
=======
>>>>>>> 642bd711f4cad78487a41f554965200c415f3a6a
    left: 0.06rem;
    width: 0.8rem;
    height: 0.2rem;
    font-size: 0.2rem;
    color: rgba(254, 254, 254, 1);
    line-height: 0.2rem;
  }

  .n-price {
    width: 1.1rem;
    height: 0.32rem;
    padding-left: 0.31rem;
    font-size: 0.42rem;
    color:#F23F15;
    line-height: 0.32rem;
  }

  .o-price {
    width: 0.79rem;
    height: 0.21rem;
    font-size: 0.27rem;
    padding-left: 0.2rem;
    text-decoration: line-through;
    color: rgba(128, 128, 128, 1);
    line-height: 0.36rem;
  }

  .o-price + div {
    width: 0.96rem;
    height: 0.23rem;
    padding: 0.13rem 0 0 2.45rem;
    font-size: 0.2rem;
    text-align: right;
    color: #666666;
  }
</style>
