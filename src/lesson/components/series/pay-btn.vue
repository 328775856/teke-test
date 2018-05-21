<template>
  <div class="pay-btn" :style="{width:width+'px'}">
    <div class="frm-btn flex-row">
      <div class="flex-row">
        <a href="javascript:" class="cancel" @click="cancel">取消</a>
        <span class="surplus">应付：￥{{payData.surplus}}.00</span>
      </div>
      <button class="comfirm button">确认支付</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "pay-btn",
    props: ['width', 'payData'],
    data() {
      return {
        isShow: false
      }
    },
    methods: {
      cancel() {
        this.$emit('payShow')
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
