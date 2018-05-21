<template>
  <div class="c-pay" v-if="pay">
    <div class="mask  flex-col">
      <div class="frm" :style="{width:width+'px'}">
        <div class="container">
          <div class="text flex-col">付款详情</div>
          <div class="title">{{payData.title}}</div>
          <div class="block">
            <div class="detail flex-row" v-for="item in payData.list" :key="item.id">
              <div>{{item.title}}</div>
              <div>￥{{item.price}}</div>
            </div>
          </div>
          <div class="price">
            <span>小计</span>
            <div class="flex-row">
              <span class="prime">￥{{payData.order_total}}</span>
              <span class="real-price">￥{{payData.order_amount}}</span>
            </div>
          </div>
          <div class="price">
            <span>优惠抵扣</span>
            <span></span>
          </div>
          <div class="price">
            <span>余额抵扣</span>
            <span>{{payData.charge}}</span>
          </div>
        </div>
      </div>
      <div class="btn">
        <paybtn :width="width" @payShow="show" :payData="payData"></paybtn>
      </div>
    </div>
  </div>
</template>

<script>
  import Paybtn from './pay-btn.vue'

  export default {
    name: "pay",
    props: ['width', 'pay', 'payData'],
    components: {Paybtn},
    data() {
      return {}
    },
    methods: {
      show() {
        this.$emit('payShow')
      }
    }
  }
</script>

<style scoped>
  .mask {
    justify-content: flex-end;
  }

  .frm {
    height: 65%;
  }

  .container {
    height: 100%;
    padding: 0 0.3rem;
    background: #fff;
    border-radius: 0.2rem 0.2rem 0 0;
    overflow-y: hidden;
  }

  .text {
    justify-content: center;
    height: 15%;
    color: #0D0D0D;
    font-weight: 500;
    font-size: 0.32rem;
  }

  .block {
    height: 40%;
    overflow-y: scroll;
    color: #999999;
    -webkit-overflow-scrolling: touch;
  }

  .title {
    height: 7%;
    color: #0D0D0D;
    font-size: 0.30rem;
    font-weight: bold;
  }

  .detail {
    justify-content: space-between;
    padding: 0.2rem 0;
  }

  .price {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 12%;
    border-top: 1px solid #E6E6E6;
  }

  .price > span {
    color: #0D0D0D;
    font-size: 0.27rem;
    font-weight: bold;
  }
.price span:nth-child(2){
  color: #F23F15;
}
  .prime {
    text-decoration: line-through;
    padding-right: 0.3rem;
    color: #999999;
    font-size: 0.24rem;
  }

  .real-price {
    color: #F23F15;
    font-size: 0.27rem;
  }
</style>
