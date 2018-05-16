<template>
  <div class="single-introduce">
    <div class="container">
      <div class="frm-content">
        <div class="single" v-if="introData.series">{{introData.series}}</div>
        <div class="flex-row">
          <div class="time">
            <div class="lesson-time flex-row">
              <i class="icon-yike icon-clock flex-row">{{introData.plan.dtm_start}}
                <button :class="introData.status">{{introData.status | status}}</button>
              </i>
            </div>
            <div class="s-price">￥{{introData.price}}</div>
          </div>
          <div class="share flex-col">
            <i class="icon-yike icon-share flex-col"></i>
            <div>邀请有奖</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "introduce",
    props: ['introData'],
    data() {
      return {}
    },
    created() {
    }
  }
</script>

<style scoped>

  .frm-content {
    width: 6.9rem;
    padding: 0 0.3rem 0 0.3rem;
  }
  .single+.flex-row{
    justify-content: space-between;
  }
  .time {
    width: 80%;
    padding-bottom: 0.4rem;
  }

  .lesson-time {
    justify-content: space-between;
    height: 0.8rem;
    line-height: 0.8rem;
  }

  .lesson-time i:first-child {
    justify-content: flex-start;
    align-items: center;
    width: 80%;
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
  .icon-share{
    width: 100%;
    justify-content: flex-end;
    text-align: center;
  }
  .icon-share+div{
    line-height: 0.46rem;
    font-size: 0.24rem;
    text-align: right;
  }
  .icon-share:before {
    width: 100%;
    font-size: 0.5rem;
    color: #2F57DA;
  }

  .single {
    padding-top: 0.3rem;
    font-size: 0.24rem;
  }

  .single-price {
    justify-content: space-between;
    padding-bottom: 0.3rem;
  }

  .s-price {
    color: #F23F15;
    font-size: 0.42rem;
    text-indent: -0.1rem
  }

  .s-price + div {
    width: 0.96rem;
    height: 0.23rem;
    padding: 0.13rem 0 0 2.45rem;
    font-size: 0.2rem;
    text-align: right;
    color: #666666;
  }
</style>
