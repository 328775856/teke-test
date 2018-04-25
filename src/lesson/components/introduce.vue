<template>
  <div class="c-introduce">
    <div class="container">
      <a class="" :href="data.target">
        <img class="frm-img" :src="data.cover">
      </a>
      <div class="icon-yike icon-user people">
        <div class="icon-yike icon-user"></div>
      </div>
      <div class="enroll">{{data.enrollment}}人</div>
      <div class="frm-content">
        <div class="title">{{data.title}}</div>
        <div class="lesson-time">
          <p class="icon-yike icon-clock">周三开课 {{data.progress[0]}}/{{data.progress[1]}}节</p>
          <i class="icon-yike icon-gift"></i>
        </div>
        <div class="price">
          <div class="tag">
            <p>特价特惠</p>
          </div>
          <div class="n-price">￥{{data.price}}</div>
          <div class="o-price">￥300</div>
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
    name: "introduce",
    data() {
      return {
        data: []
      }
    },
    created() {
      this.axios
        .get('/api/lesson-overview.json', {
          params: {
            sn: this.$route.query.sn
          }
        })
        .then(res => {
          if (res.data.error === '0') {
            this.data = res.data.data
            console.log("success")
          }
        })
    }
  }
</script>

<style scoped>
  .container{
    position: relative;
  }
  /*people 图标*/
  .people{
    position: absolute;
    top: 3.48rem;
    left: 0.32rem;
    font-size: 0.24rem;
    color: white;
  }
  .people.icon-user:before {
    position: absolute;
    left: -0.1rem;
    top: 0.15rem;
    color: #fff;
    font-size: 0.25rem;
    z-index: 2;
  }

  .icon-user .icon-user:before {
    position: absolute;
    top: 0.15rem;
    color: #ccc;
    font-size: 0.2rem;
  }

  .icon-arrow-r {
    font-weight: bolder;
  }

  p {
    margin: 0px;
  }

  .icon-clock:before {
    display: inline-block;
    position: relative;
    left: -0.1rem;
    font-size: 0.5rem;
    color: rgba(47, 87, 218, 1);
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
    height: 1.9rem;
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
    position: relative;
    height: 0.8rem;
    line-height: 0.8rem;
  }

  .lesson-time p {
    display: flex;
    flex-flow: row;
    width: 2.21rem;
    height: 0.23rem;
    font-size: 0.24rem;
    color: rgba(128, 128, 128, 1);
  }

  .icon-gift:before {
    position: absolute;
    right: 0.2rem;
    font-size: 0.5rem;
    color: #2F57DA;
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
    width: 0.8rem;
    border: rgba(242, 63, 21, 1) 0.19rem solid;
    border-right: 0.11rem solid transparent;
  }

  .tag p {
    position: absolute;
    z-index: 999;
    left: -0.05rem;
    width: 0.8rem;
    height: 0.2rem;
    font-size: 0.18rem;
    color: rgba(254, 254, 254, 1);
    line-height: 0.2rem;
  }

  .n-price {
    width: 1.1rem;
    height: 0.32rem;
    padding-left: 0.31rem;
    font-size: 0.42rem;
    color: rgba(242, 63, 21, 1);
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
    padding-left: 2.45rem;
    font-size: 0.2rem;
    text-align: center;
    color: rgba(102, 102, 102, 1);
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
    color: rgba(153, 153, 153, 1);
    margin-right: .2rem;
  }

  .frm-tips span:nth-child(4) {
    width: 0.3rem;
    height: 0.3rem;
    padding-left: 1.6rem;
    margin: 0;
  }

  .icon-ok:before {
    width: 0.24rem;
    height: 0.24rem;
  }
</style>
