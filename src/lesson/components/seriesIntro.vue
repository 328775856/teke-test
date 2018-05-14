<template>
    <div class="series-introduce">
      <div class="lesson-time flex-row">
      <i class="icon-yike icon-clock  flex-row">周三开课 {{introData.progress[0]}}/{{introData.progress[1]}}节</i>
      <i class="icon-yike icon-share"></i>
      </div>
      <div class="price">
      <div class="tag flex-row">
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

  .lesson-time i:first-child {
    justify-content: flex-start;
    align-items: center;
    width: 80%;
    font-size: 0.24rem;
    color: #0D0D0D;
  }

  .icon-clock:before {
    padding-right: 0.13rem;
    font-size: 0.33rem;
    color: #2F57DA;
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
    justify-content: flex-end;
    position: relative;
    background: #F23F15;
    border: #F23F15 0.1rem solid;
  }

  .tag:after {
    content: '';
    position: absolute;
    left: 0.8rem;
    border: #F23F15 0.2rem solid;
    border-right: 0.1rem solid transparent;
  }

  .tag p {
    z-index: 99;
    height: 0.2rem;
    margin: 0;
    padding-left: 0.05rem;
    font-size: 0.2rem;
    color: #FEFEFE;
    text-align: right;
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
    color: #808080;
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
