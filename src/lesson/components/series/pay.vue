<template>
  <div class="c-pay" v-if="pay">
    <div class="mask  flex-col">
      <div :style="{width:width+'px'}">
        <div class="container">
          <div class="text flex-col">付款详情</div>
          <div>
            <div class="title">从小白变身Excel达人</div>
            <div class="detail"></div>
          </div>
          <div class="price">
            <span>小计</span>
            <div>
              <span></span>
              <span></span>
            </div>
          </div>
          <div class="price">
            <span>优惠抵扣</span>
            <span></span>
          </div>
          <div class="price">
            <span>余额抵扣</span>
            <span></span>
          </div>
        </div>
      </div>
      <div class="btn">
        <paybtn :width="width" @payShow="show"></paybtn>
      </div>
    </div>
  </div>
</template>

<script>
  import Paybtn from './pay-btn.vue'

  export default {
    name: "pay",
    props: ['width', 'pay'],
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

  .container {
    padding: 0 0.3rem 0.4rem 0.3rem;
    background: #fff;
    border-radius: 0.2rem 0.2rem 0 0
  }

  .text {
    justify-content: center;
    height: 1.4rem;
    color: #0D0D0D;
    font-weight: 500;
    font-size: 16px;
  }

  .title {
    height: 0.71rem;
    color: #0D0D0D;
    font-size: 15px;
    font-weight: bold;
  }

  .detail {
    padding: 0.4rem;
  }

  .price {
    height: 1rem;
    line-height: 1rem;
    border-top: 1px solid #E6E6E6;
  }

  .price > span {
    color: #0D0D0D;
    font-size: 13px;
    font-weight: bold;
  }
</style>
