<template>
  <div class="series-introduce flex-row">
    <div class="time flex-col">
      <div class="lesson-time flex-row">
        <i class="icon-yike icon-clock  flex-row">周三开课 {{introData.progress[1]}}/{{introData.progress[0]}}节</i>
      </div>
      <div class="price">
        <div class="tag flex-row">
          <p>特价特惠</p>
        </div>
        <div class="n-price">￥{{introData.price}}</div>
        <div class="o-price">￥300</div>
      </div>
    </div>
    <div class="share flex-col">
      <i class="icon-yike icon-share flex-col"></i>
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
  .series-introduce {
    justify-content: space-between;
    padding: 0 0.3rem;
  }

  .time {
    width: 80%;
  }

  .lesson-time {
    justify-content: space-between;
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
  }

  .icon-clock {
    font-size: 0.24rem;
    color: #808080;
  }

  .icon-clock:before {
    padding-right: 0.13rem;
    font-size: 0.33rem;
    color: #2F57DA;
  }

  .lesson-time button {
    width: 1.1rem;
    height: 0.36rem;
    margin-left: 0.21rem;
    border-radius: 0.18rem;
    font-size: 0.2rem;
    color: #fff;
    border: none;
  }

  .share {
    justify-content: center;
    align-items: flex-end;
    width: 0.96rem;
    color: #666666;
  }

  .icon-share {
    width: 100%;
    justify-content: flex-end;
    text-align: center;
  }

  .icon-share + div {
    line-height: 0.46rem;
    font-size: 0.24rem;
    text-align: right;
  }

  .icon-share:before {
    width: 100%;
    font-size: 0.5rem;
    color: #2F57DA;
  }

  .price {
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    padding-bottom: 0.4rem;
  }

  .tag {
    justify-content: flex-end;
    position: relative;
    height: 0;
    text-align: center;
    background: #F23F15;
    border: #F23F15 0.2rem solid;
    border-right: 0.1rem solid transparent;
  }

  .tag:after {
    content: '';
    position: absolute;
    left: 0.8rem;
    padding: 0;
    border: #F23F15 0.2rem solid;
    border-right: 0.1rem solid transparent;
  }

  .tag p {
    z-index: 99;
    font-size: 0.2rem;
    color: #FEFEFE;
    text-align: right;
    line-height: 0.2rem;
  }

  .n-price {
    width: 1.1rem;
    padding-left: 0.31rem;
    font-size: 0.42rem;
    color: #F23F15;
    line-height: 0.32rem;
  }

  .o-price {
    width: 0.79rem;
    font-size: 0.27rem;
    padding-left: 0.2rem;
    text-decoration: line-through;
    color: #808080;
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
