<template>
  <div class="c-contents">
    <div class="box flex-col">
      <div class="frm-content flex-row">
        <div class="img"></div>
        <div class="content flex-col">
          <div class="text flex-row">
            <div class="msg">{{item.msg}}</div>
            <div class="button flex-col">
              <button>{{item.button}}</button>
              <div class="price">￥19</div>
            </div>
          </div>
          <div class="time flex-row">
            <i class="icon-yike icon-information"></i>271人
            <span>2018-04-20  20:00</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Contents.vue",
    props: ['item'],
    data() {
      return {
        time: ''
      }
    }
  }
</script>

<style scoped>
  p {
    margin: 0;
  }

  .a {
    background: rgba(255, 126, 126, 1);
  }

  .b {
    background: rgba(93, 201, 106, 1);
  }

  .c {
    background: rgba(216, 193, 153, 1);
  }

  .c-contents {
    width: 100%;
    background: rgba(255, 255, 255, 1);
  }

  .box {
    padding: 0 0.3rem;
  }

  .frm-content {
    justify-content: flex-start;
    width: 100%;
    padding: 0.3rem 0;
    border-top: 1px solid #ddd;
  }

  .img {
    width: 2.4rem;
    height: 1.28rem;
    border: 0.01rem #DDDDDD solid;
  }

  .content {
    justify-content: space-between;
    width: 4.19rem;
    margin-left: 0.3rem;
    text-align: left;
  }

  .content > div {
    width: 4.19rem;
  }

  .text {
    justify-content: space-between;
  }

  .text div:first-child {
    width: 2.97rem;
    font-size: 13.5px;
    color: rgba(13, 13, 13, 1);
    line-height: 21px;
  }

  .msg {
    min-height: 0.81rem;
  }

  .button {
    height: 100%;
    justify-content: space-between;
  }

  .text button {
    height: 0.36rem;
    background: rgba(255, 126, 126, 1);
    border-radius: 0.18rem;
    font-size: 0.21rem;
    color: rgba(255, 255, 255, 1);
    line-height: 0.36rem;
    border: none;
  }

  .price {
    width: 0.61rem;
    font-size: 15px;
    color: rgba(242, 63, 21, 1);
    line-height: 18px;
    text-align: right;
  }

  .time {
    justify-content: space-between;
    width: 4.19rem;
    height: 0.36rem;
    margin-top: 0.08rem;
    font-size: 12px;
    line-height: 0.36rem;
    color: rgba(128, 128, 128, 1);
  }

  .time i {
    margin-right: -1.5rem;
  }

</style>
