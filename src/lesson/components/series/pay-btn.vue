<template>
  <div class="pay-btn" :style="{width:width+'px'}">
    <div class="frm-btn flex-row">
      <div class="flex-row">
        <a href="javascript:" class="cancel" @click="cancel">取消</a>
        <span class="surplus">应付：￥{{payData.surplus}}.00</span>
      </div>
      <button class="comfirm button" @click="pay">确认支付</button>
    </div>
  </div>
</template>

<script>
  import Bus from '@/assets/js/bus'
  import wx from 'weixin-js-sdk'
  import qs from 'qs'

  export default {
    name: "pay-btn",
    props: ['width', 'payData'],
    components: {Bus},
    data() {
      return {
        orderData: ''
      }
    },
    created() {
      // 接收Series中pay的返回值
      Bus.$on('pay', (data) => {
        this.orderData = data
      })
    },
    methods: {
      cancel() {
        // 触发Series中payShow
        Bus.$emit('payShow')
      },
      pay() {
        this.api.get('/api/jweixin-config', {
          url: location.href.split('#')[0]
        })
          .then(res => {
            if (res.error === '0') {
              wx.config({
                debug: !res.data.debug,
                appId: res.data.appId,
                timestamp: res.data.timestamp,
                nonceStr: res.data.nonceStr,
                signature: res.data.signature,
                jsApiList: ['chooseWXPay']
              })
              wx.error(function (res) {
                alert(res)
              });
              this.api.post('/api/order-prepay-wxm', qs.stringify({
                sn: this.$route.query.sn || this.orderData
              }))
                .then(res => {
                  if (res.error === '0') {
                    wx.ready(function () {
                      wx.chooseWXPay({
                        timestamp: res.data.timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                        nonceStr: res.data.nonceStr, // 支付签名随机串，不长于 32 位
                        package: res.data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
                        signType: res.data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                        paySign: res.data.paySign, // 支付签名
                        success: function (res) {
                          // 支付成功后的回调函数
                        }
                      });
                    })
                  }
                })
            }
          })
      }
    }
  }
</script>

<style scoped>
  .pay-btn {
    height: 1rem;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
    background: #fff;
  }

  .frm-btn .flex-row {
    justify-content: space-between;
    height: 1rem;
    flex: 2.2;
    font-size: 0.3rem
  }

  .button {
    height: 1rem;
    border: 0;
    -webkit-tap-highlight-color: transparent;
  }

  .cancel {
    padding-left: 0.3rem;
    color: #999999;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }

  .surplus {
    padding-right: 0.4rem;
    color: #F23F15;
  }

  .comfirm {
    flex: 1;
    background: #2F57DA;
    color: white;
    font-size: 0.32rem;
    letter-spacing: 0.02rem;
  }
</style>
