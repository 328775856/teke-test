<template>
  <div class="c-lesson-detail-order flex-col" v-if="order">
    <div class="mask click" @click="cancel"></div>
    <div class="frm-order">
      <div class="head flex-row">订单详情</div>
      <div class="body">
        <div class="title">{{order.title}}</div>
        <div class="list" v-if="order.list.length">
          <div v-for="(lesson, index) in order.list" :key="index" class="flex-row">
            <div>{{lesson.title}}</div>
            <div>￥{{lesson.price}}</div>
          </div>
        </div>
        <div class="item">
          <div class="item-head">订单金额</div>
          <div class="item-info">￥{{order.order_amount}}</div>
        </div>
        <div class="item" v-if="order.discount">
          <div class="item-head">优惠抵扣</div>
          <div class="item-info">{{order.discount}}</div>
        </div>
        <div class="item">
          <div class="item-head">余额支付</div>
          <div class="item-info">{{order.charge}}</div>
        </div>
      </div>
      <div class="foot flex-row">
        <div class="foot-cancel flex-row click" @click="cancel">取消</div>
        <div class="foot-message flex-row">应付: ￥{{order.surplus}}</div>
        <div class="foot-confirm flex-row click" @click="confirm">确认支付</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'lesson-detail-order',
    props: ['order'],
    methods: {
      cancel() {
        this.$emit('cancel')
      },
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
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .frm-order {
    width: 7.5rem;
    background: #fff;
    z-index: 999;
    border-radius: .2rem .2rem 0 0;
    color: #0D0D0D
  }

  .head {
    height: 1.4rem;
    font-size: .32rem;
  }

  .body {
    padding: 0 .3rem;
  }

  .foot {
    height: 1rem;
  }

  .foot-cancel {
    padding: .3rem;
    font-size: .28rem;
    color: #999;
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
  }

  .title {
    font-size: .3rem;
    font-weight: bold;;
  }

  .list {
    max-height: 2.5rem;
    padding: .2rem 0;
    display: -webkit-box;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }

  .list > div {
    width: 100%;
    justify-content: space-between;
    font-size: .27rem;
    color: #666;
    padding: .2rem 0;
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
