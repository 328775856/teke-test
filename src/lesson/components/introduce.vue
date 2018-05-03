<template>
  <div class="c-introduce">
    <div class="container">
      <a  :href="introData.target" >
        <img class="frm-img" :src="introData.cover">
      </a>
      <div class="icon-yike icon-my-selected people">
        <div class="icon-yike icon-my-selected"></div>
      </div>
      <div class="enroll">{{introData.enrollment}}人</div>
      <div class="frm-content">
        <div class="title">{{introData.title}}</div>
        <!--单课内容-->
        <div class="single" v-if="single">所属系列 · 从零到一起飞 Shopify × Facebook</div>
        <!--单课内容结束-->
        <div class="lesson-time flex-row" v-if="!single">
          <p class="icon-yike icon-clock  flex-row">周三开课 {{introData.progress[0]}}/{{introData.progress[1]}}节</p>
          <i class="icon-yike icon-share"></i>
        </div>
        <!--单课内容-->
        <div class="lesson-time flex-row" v-if="single">
          <p class="icon-yike icon-clock flex-row">2018-04-20 20:00
            <button :class="introData.status">{{introData.status | status}}</button>
          </p>
          <i class="icon-yike icon-share"></i>
        </div>
        <!--单课内容结束-->
        <div class="price" v-if="!single">
          <div class="tag">
            <p>特价特惠</p>
          </div>
          <div class="n-price">￥{{introData.price}}</div>
          <div class="o-price">￥300</div>
          <div>邀请有奖</div>
        </div>
        <!--单课内容-->
        <div class="flex-row single-price" v-if="single">
          <div class="s-price">￥90</div>
          <div>邀请有奖</div>
        </div>
        <!--单课内容结束-->
      </div>
      <div class="frm-tips flex-row">
        <div class="text">
          <span class="icon-yike icon-select"> 永久回放</span>
          <span class="icon-yike icon-select"> 无条件退款</span>
          <span class="icon-yike icon-select"> 图文语音</span>
        </div>
        <a class="icon-yike icon-arrow-r" href=""></a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "introduce",
    props: ['introData', 'single'],
    data() {
      return {
      }
    },
    created() {
      // this.axios
      //   .get('/api/lesson-overview.json', {
      //     params: {
      //       sn: this.$route.query.sn
      //     }
      //   })
      //   .then(res => {
      //     if (res.data.error === '0') {
      //       this.data = res.data.data
      //     }
      //   })
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

  /*people 图标*/
  .people {
    position: absolute;
    top: 3.6rem;
    left: 0.32rem;
    font-size: 0.24rem;
    line-height: 0.36rem;
    color: white;
  }

  .people:before {
    position: absolute;
    left: -0.1rem;
    color: #fff;
    font-size: 0.25rem;
    z-index: 2;
  }

  .icon-my-selected .icon-my-selected:before {
    position: absolute;
    color: #ccc;
    font-size: 0.2rem;
  }

  .icon-arrow-r {
    font-weight: bolder;
  }

  p {
    margin: 0px;
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
    position: absolute;
    top: 3.58rem;
    left: 0.65rem;
    font-size: 0.24rem;
    color: white;
  }

  .frm-content {
    width: 6.9rem;
    padding: 0.3rem 0.3rem 0 0.3rem;
  }

  .title {
    width: 5.85rem;
    height: 0.38rem;
    font-size: 0.36rem;
    color: rgba(13, 13, 13, 1);
    line-height: 0.38rem;
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
  .frm-tips {
    justify-content: space-between;
    height: 0.8rem;
    padding: 0 0.3rem;
    background: rgba(255, 252, 245, 1);
    color: #999999;
  }

  .text {
    width: 80%;
    line-height: 0.3rem ;
  }

  .frm-tips span {
    width: 0.96rem;
    font-size: 0.24rem;
    color: rgba(153, 153, 153, 1);
    margin-right: .2rem;
  }

  .frm-tips a {
    position: relative;
    width: 0.3rem;
    height: 0.3rem;
    color: #999999;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }

  .icon-arrow-r:before {
    position: absolute;
    top: 0.04rem;
    width: 0.3rem;
    height: 0.3rem;
    font-size: 0.24rem;
    text-align: right;
  }
</style>
