<template>
  <popup class="c-lesson-detail-order flex-col" :isOpen="order" v-on:close="$emit('cancel')">
      <div slot="head" class="order-head flex-row font-medium">订单详情</div>
      <div class="order-body">
        <div class="title">{{_order.title}}</div>
        <div class="list items" v-if="_order.list">
          <ul>
            <li v-for="(lesson, index) in _order.list" :key="index" class="flex-row">
              <div>{{lesson.title}}</div>
              <div>￥{{lesson.price}}</div>
            </li>
          </ul>
        </div>
        <div class="item">
          <div class="item-head font-bold">订单金额</div>
          <div class="item-info font-bold">￥{{_order.order_amount}}</div>
        </div>
        <div class="item" v-if="_order.discount">
          <div class="item-head font-bold">优惠抵扣</div>
          <div class="item-info font-bold">{{_order.discount}}</div>
        </div>
        <div class="item">
          <div class="item-head font-bold">余额支付</div>
          <div class="item-info font-bold">{{_order.charge}}</div>
        </div>
      </div>
      <div slot="foot" class="order-foot flex-row">
        <div class="foot-cancel flex-row click font-medium" @click="$emit('cancel')">取消</div>
        <div class="foot-message flex-row">应付: ￥{{_order.surplus}}</div>
        <div class="foot-confirm flex-row click font-medium" @click="confirm">确认支付</div>
      </div>
  </popup>
</template>

<script>
  import Popup from "../../components/Popup";

  export default {
    name: 'lesson-detail-order',
    components: {Popup},
    props: ['order'],
    data() {
      return {
        checkWXPay: null
      }
    },
    created() {
      this.wx.checkJsApi({
        jsApiList: ['chooseWXPay'],
        success: (res) => {
          this.checkWXPay = res.checkResult.chooseWXPay
        }
      })
    },
    computed: {
      _order() {
        return this.order || {}
      }
    },
    methods: {
      confirm() {
        if (this.order.surplus === 0) {
          this.purchaseByBalance()
        } else {
          this.purchaseByWeixin()
        }
      },
      purchaseByBalance() {
        this.api.post('/api/order-purchase', {
          sn: this.order.sn
        }).then(() => {
          this.$emit('complete')
        })
      },
      purchaseByWeixin() {
        if (this.app.env === 'wxa') {
          this.wx.miniProgram.navigateTo({
            url: `/page/pay/index?order=${this.order.sn}&callback=${location.href}&action=completeEnroll`
          })
          return
        }
        this.api.post('/api/order-prepay-wxm', {
          sn: this.order.sn
        }).then((res) => {
          this.wx.chooseWXPay({
            timestamp: res.data.timeStamp,
            nonceStr: res.data.nonceStr,
            package: res.data.package,
            signType: res.data.signType,
            paySign: res.data.paySign,
            success: () => {
              this.$emit('complete')
            }
          })
        })
      }
    }
  }
</script>

<style scoped>
  .c-lesson-detail-order {
    position: fixed;
    justify-content: flex-end;
    z-index: 100;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .frm-order {
    width: 7.5rem;
    background: #fff;
    border-radius: .2rem .2rem 0 0;
    color: #0D0D0D;
    z-index: 100;
  }

  .order-head {
    height: 1.4rem;
    font-size: .32rem;
  }

  .order-body {
    padding: 0 .3rem;
  }

  .order-foot {
    height: 1rem;
    width: 100%;
  }

  .foot-cancel {
    padding: .3rem;
    font-size: .28rem;
    color: #999;
    cursor: pointer;
  }

  .foot-message {
    flex-grow: 1;
    justify-content: flex-end;
    padding: 0 .48rem;
    font-size: .3rem;
    color: #F23F15;
  }

  .foot-confirm {
    font-size: .32rem;
    color: #fff;
    background: #2F57DA;
    padding: 0 .48rem;
    height: 100%;
    cursor: pointer;
  }

  .title {
    font-size: .3rem;
    font-weight: bold;
  }

  .list {
    max-height: 2.5rem;
    padding: .2rem 0;
    display: -webkit-box;
    overflow-y: scroll;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    box-sizing: border-box;
    border: .1rem solid #fff;
  }

  .list ul {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
  }

  .list li {
    justify-content: space-between;
    font-size: .27rem;
    color: #666;
    padding: .2rem;
  }

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1rem;
    font-size: .27rem;
    border-top: 1px solid #E6E6E6;
  }

  .item-head {
  }

  .item-info {
    color: #F23F15;
  }
</style>
