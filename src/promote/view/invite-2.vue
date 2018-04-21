<template>
  <div class="invite-2">
    <div class="container">
      <div class="frm-canvas">
        <div class="canvas"></div>
        <div class="tips" @click="showModal">
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="frm-notice">
        <span></span>
        <a></a>
      </div>
      <div class="frm-picker">
        <div class="box-picker" v-for="item in list" :key="item.num">
          <div class="pick">{{item.num}}</div>
        </div>
      </div>
    </div>
    <modal v-show="show" :isShow="show" title="佣金规则" confirm="知道了" @close="showModal">
      <ul style="word-break-wrap: wrap">
        <li>234</li>
        <li>123</li>
      </ul>
    </modal>
  </div>
</template>

<script>
  import Modal from '../../components/modal/IsModal.vue'

  export default {
    name: "invite-2.vue",
    components: {Modal},
    data() {
      return {
        show: false,
        list: [
          {
            num: ''
          }, {
            num: ''
          }, {
            num: ''
          }, {
            num: ''
          }, {
            num: ''
          }, {
            num: ''
          }, {
            num: ''
          }
        ]
      }
    },
    methods: {
      showModal() {
        this.show = !this.show
        //  console.log(this.show)
      }
    }
    // mounted() {
    //   window.onresize = this.canvasResize
    // },
    // methods: {
    //   canvasResize( ) {
    //     let frm = document.getElementById('frm-canvas')
    //     let cas = document.getElementById('canvas')
    //     let cover = document.getElementById('cover')
    //     let pw = cas.style.width
    //     let ph = cas.style.height
    //     if (frm.clientWidth / cas.clientWidth < frm.clientHeight / cas.clientHeight) {
    //       cas.style.width = frm.clientWidth * 0.8 + 'px'
    //       cover.style.width = frm.clientWidth * 0.8 +  'px'
    //     } else {
    //       cas.style.height = frm.clientHeight * 0.9 + 'px';
    //       cover.style.height = frm.clientHeight * 0.9 + 'px'
    //     }
    //     if (pw !== cas.style.width || ph !== cas.style.height) {
    //       this.canvasResize()
    //     }
    //   }
    // }
  }
</script>

<style scoped>
  .invite-2 {
    width: 100%;
    height: 100%;
  }

  .container {
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    height: 100%;
    background: rgba(242, 242, 242, 1);
  }

  .frm-canvas {
    position: relative;
    width: 4.5rem;
    height: 7.96rem;
    background: rgba(170, 170, 170, 1);
    border-radius: 0.12rem;
    margin: 0 auto;
    margin-top: 1rem;
  }

  .tips {
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    top: 0.6rem;
    left: 4.3rem;
    width: 1.69rem;
    height: 0.48rem;
    line-height: 0.48rem;
    border-radius: .24rem 0 0 .24rem;
    background: rgba(221, 221, 221, 1);
  }

  .tips span:first-child {
    display: block;
    width: 0.24rem;
    height: 0.24rem;
    margin-left: 0.1rem;
    background: rgba(170, 170, 170, 1);
  }

  .tips span:last-child {
    display: block;
    width: 0.97rem;
    height: 0.24rem;
    background: rgba(170, 170, 170, 1);
  }

  .frm-notice {
    height: 1.3rem;
    margin: 0 auto;
    line-height: 1.3rem;
    -webkit-overflow-scrolling: touch;
  }

  .frm-notice span {
    display: inline-block;
    width: 4.22rem;
    height: 0.36rem;
    background: rgba(170, 170, 170, 1);
  }

  .frm-notice a {
    display: inline-block;
    width: 1.36rem;
    height: 0.36rem;
    margin-left: 0.3rem;
    background: rgba(170, 170, 170, 1);
    border-radius: 0.04rem;
  }

  .frm-picker {
    display: -webkit-box;
    flex-flow: row nowrap;
    align-items: center;
    width: 100%;
    height: 2rem;
    background: rgba(221, 221, 221, 1);
    overflow-x: scroll;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch
  }

  .frm-picker div:first-child div {
    margin-left: 0.15rem;
  }

  .box-picker {
    padding: 0.15rem;
  }

  .pick {
    width: 1.28rem;
    height: 1.28rem;
    background: rgba(170, 170, 170, 1);
    border-radius: 0.08rem;
  }
</style>
