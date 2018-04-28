<template>
  <div class="c-contents">
    <div class="box flex-col" v-for="(item,index) in catalogData" :key="index" ref="num">
      <div class="frm-content flex-row">
        <div class="img">
          <img class="img" :src="item.cover">
        </div>
        <div class="content flex-col">
          <div class="text flex-row">
            <div class="msg">{{item.title}}</div>
            <div class="status flex-col">
              <!--<button :class="item.status" v-if="item.status==='finish'?status='可回放':''" :status="status">{{status}}</button>-->
              <!--<button :class="item.status" v-else-if="item.status==='beginning'?status='开课中':''" :status="status">{{status}}</button>-->
              <!--<button :class="item.status" v-else-if="item.status==='no'?status='未开课':''" :status="status">{{status}}</button>-->
              <button :class="item.status">{{item.status | status}}</button>
              <div class="price">￥{{item.price}}</div>
            </div>
          </div>
          <div class="time flex-row">

            <div class="icon-yike icon-user people">
              <div class="icon-yike icon-user"></div>
            </div>
            <div class="enroll">{{item.enrollment}}人</div>
            <span>{{item.start_time}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Catalog",
    props: ['catalogData'],
    data() {
      return {
      }
    },
    methods: {
    },
    created() {
      // this.axios
      //   .get('/api/series-catalog', {
      //     params: {
      //       sn: this.$route.query.sn
      //     }
      //   })
      //   .then(res => {
      //       if (res.data.error === '0') {
      //         this.data = res.data.data
      //       }
      //     }
      //   )
    }
  }
</script>

<style scoped>
  /*people 图标*/
  .people{
    position: relative;
    font-size: 0.24rem;
  }
  .people.icon-user:before {
    position: absolute;
    top: -0.17rem;
    left:  -0.1rem;
    color: #999999;
    font-size: 0.25rem;
    z-index: 2;
  }

  .icon-user .icon-user:before {
    position: absolute;
    top: -0.17rem;
    color: #CCCCCC;
    font-size: 0.2rem;
  }
  .enroll {
    position: absolute;
    left: 0.23rem;
    font-size: 12px;
  }
  p {
    margin: 0;
  }
  .finish {
    background: rgba(255, 126, 126, 1);
  }

  .beginning {
    background: rgba(93, 201, 106, 1);
  }

  .no {
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
    font-size: 13.5px;
    color: rgba(13, 13, 13, 1);
    line-height: 21px;
  }

  .msg {
    min-height: 0.81rem;
    font-weight: bold;
  }

  .status {
    height: 0.81rem;
    justify-content: space-between;
    align-items: normal;
  }

  .text button {
    width: 1.1rem;
    height: 0.36rem;
    border-radius: 0.18rem;
    font-size: 10px;
    color: rgba(255, 255, 255, 1);
    line-height: 0.36rem;
    border: none;
  }

  .price {
    font-size: 15px;
    color: rgba(242, 63, 21, 1);
    line-height: 18px;
    text-align: right;
    padding-right: 0.02rem;
  }

  .time {
    position: relative;
    top: 0.1rem;
    justify-content: space-between;
    width: 4.19rem;
    height: 0.36rem;
    margin-top: 0.08rem;
    font-size: 12px;
    line-height: 0.36rem;
    color: rgba(128, 128, 128, 1);
  }

  .time .icon-information:before {
    padding-ritgh: 0.21rem;
  }

</style>
