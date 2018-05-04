<template>
  <div class="single-introduce">
    <div class="container">
      <div class="frm-content">
        <div class="single">所属系列 · 从零到一起飞 Shopify × Facebook</div>
        <div class="lesson-time flex-row">
          <p class="icon-yike icon-clock flex-row">2018-04-20 20:00
            <button :class="introData.status">{{introData.status | status}}</button>
          </p>
          <i class="icon-yike icon-share"></i>
        </div>
        <div class="flex-row single-price">
          <div class="s-price">￥90</div>
          <div>邀请有奖</div>
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
      return {
      }
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
  .single{
    padding-top: 0.3rem;
    font-size:0.24rem;
  }
  .single-price{
    justify-content: space-between;
    padding-bottom: 0.3rem;
  }
  .s-price{
    color:#F23F15;
    font-size: 0.42rem;
    text-indent:-0.1rem
  }
  .s-price+div{
    width: 0.96rem;
    height: 0.23rem;
    padding: 0.13rem 0 0 2.45rem;
    font-size: 0.2rem;
    text-align: right;
    color: #666666;
  }
</style>
