<template>
  <modal class="c-lesson-detail-order flex-col" :display="order" v-on:cancel="$emit('cancel',temp)">
    <div class="frm-order" id="frm-order" v-if="order" :style="{bottom: top}">
      <div class="order-head flex-row font-medium">订单详情</div>
      <div class="order-body">
        <div class="title">{{order.title}}</div>
        <div class="list" v-if="order.list.length">
          <ul>
            <li v-for="(lesson, index) in order.list" :key="index" class="flex-row">
              <!--<div class="flex-row list-item">-->
              <div>{{lesson.title}}</div>
              <div>￥{{lesson.price}}</div>
              <!--</div>-->
            </li>
          </ul>
        </div>
        <div class="item">
          <div class="item-head font-bold">订单金额</div>
          <div class="item-info font-bold">￥{{order.order_amount}}</div>
        </div>
        <div class="item" v-if="order.discount">
          <div class="item-head font-bold">优惠抵扣</div>
          <div class="item-info font-bold">{{order.discount}}</div>
        </div>
        <div class="item">
          <div class="item-head font-bold">余额支付</div>
          <div class="item-info font-bold">{{order.charge}}</div>
        </div>
      </div>
      <div class="order-foot flex-row">
        <div class="foot-cancel flex-row click font-medium" @click="$emit('cancel', temp)">取消</div>
        <div class="foot-message flex-row">应付: ￥{{order.surplus}}</div>
        <div class="foot-confirm flex-row click font-medium" @click="confirm">确认支付</div>
      </div>
    </div>
  </modal>
</template>

<script>
  import Modal from "../../components/Modal";

  export default {
    name: 'lesson-detail-order',
    components: {Modal},
    props: ['order', 'top'],
    data() {
      return {
        checkWXPay: null,
        temp: ''
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
    mounted() {
      let order = document.getElementById('frm-order')
      this.temp = -order.offsetHeight + 'px'
      // this.top = this.temp
      this.$emit('change', this.temp)
      setTimeout(() => {
        // this.top = 0 + 'px'
        this.$emit('change2', '0px')
      }, 100)
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
    position: absolute;
    width: 7.5rem;
    background: #fff;
    border-radius: .2rem .2rem 0 0;
    color: #0D0D0D;
    z-index: 100;
    transition: all .3s;
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
    font-weight: bold;;
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
