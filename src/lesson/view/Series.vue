<template>
  <div class="c-series" :class="{isShow:isShow||pay}">
    <div class="introduce">
      <div class="i-header">
        <introduce :introData="introData"></introduce>
      </div>
      <div class="i-content">
        <series-intro v-if="introData" :introData="introData" :sn="sn"></series-intro>
      </div>
      <div class="i-bottom">
        <intro-bottom @show="show"></intro-bottom>
      </div>
    </div>
    <div class="tabs flex-row">
      <tabs @click.native="active(index)"
            :tabs="tabs"
            :idx="index"
            v-for="(item,index) in tabs"
            :key="index"
            :class="{ active:isActive===index}">
      </tabs>
    </div>
    <div v-if="isActive===0">
      <div class="teacher">
        <div class="title">
          讲师
        </div>
        <teacher v-if="teacherData" :teacherData="teacherData" :introData="introData"></teacher>
      </div>
    </div>
    <div class="title">目录</div>
    <div class="contents">
      <catalog v-if="catalogData" :catalogData="catalogData"></catalog>
    </div>
    <div class="invite-list">
      <invite :sn="sn"></invite>
    </div>
    <div class="qrcode">
      <qrcode></qrcode>
    </div>
    <div class="bottom-btn">
      <series-btn :isShow="isShow"></series-btn>
    </div>
    <div>
      <pay :pay="pay" :payData="payData"></pay>
    </div>
    <div>
      <course-rules :isShow="isShow" @show="show"></course-rules>
    </div>
  </div>
</template>

<script>
  import {markdown} from 'markdown'
  import Bus from '@/assets/js/bus'
  import Introduce from '../components/introduce.vue'
  import SeriesIntro from '../components/series/seriesintro.vue'
  import IntroBottom from '../components/introBottom.vue'
  import Teacher from '../components/teacher.vue'
  import Catalog from '../components/series/Catalog.vue'
  import SeriesBtn from '../components/series/series-btn.vue'
  import Invite from '../components/invite-list.vue'
  import Tabs from '../components/tabs.vue'
  import Qrcode from '../components/qrcode.vue'
  import Pay from '../components/series/pay.vue'
  import courseRules from '../components/course-rules.vue'

  export default {
    name: 'series',
    components: {
      Bus,
      markdown,
      Introduce,
      Teacher,
      Catalog,
      SeriesBtn,
      Tabs,
      Invite,
      Qrcode,
      SeriesIntro,
      IntroBottom,
      Pay,
      courseRules
    },
    data() {
      return {
        introData: [],
        catalogData: [],
        teacherData: [],
        payData: [],
        tabs: ['课程', '目录'],
        isActive: 0,
        idx: '',
        width: '',
        isShow: false,
        pay: false,
        sn: ''
      }
    },
    created() {
      this.sn = this.$route.query.sn
      // 相关系列课
      this.api.get('/api/series-relative', {
        sn: this.$route.query.sn
      })
        .then(res => {
          this.catalogData = res.data
        })
      // 系列课详情
      this.api.get('/api/series-profile', {
        sn: this.$route.query.sn
      })
        .then(res => {
          this.introData = res.data
        })
      // 系列课介绍
      this.api.get('/api/series-introduce', {
        sn: this.$route.query.sn
      })
        .then(res => {
          this.teacherData = res.data
          this.teacherData.content = markdown.toHTML(this.teacherData.content)
        })
      //
      Bus.$on('payShow', () => {
        this.pay = !this.pay
        if (this.pay === true) {
          this.api.post('/api/order-book-series', {
            sn: this.$route.query.sn
          })
            .then(res => {
              if (res.error === '0') {
                this.fetchPriceList(res.data.sn)
                // 触发pay-btn中pay
                Bus.$emit('pay', res.data.sn)
              }
            })
        }
      })
    },
    methods: {
      fetchPriceList(orderSn) {
        this.api.get('/api/order-inquiry', {
          sn: orderSn
        })
          .then(res => {
            this.payData = res.data
          })
      },
      active(index) {
        this.isActive = index
      },
      show() {
        this.isShow = !this.isShow
      }
    }
  }
</script>

<style scoped>

  .title {
    position: relative;
    height: 0.36rem;
    font-size: 16px;
    padding: 0.32rem 0.31rem;
    font-weight: bold;
    line-height: 0.36rem;
    background: #fff;
  }

  .title:before {
    content: '';
    position: absolute;
    left: 0;
    width: 0.1rem;
    height: 0.36rem;
    background: #2F57DA
  }
  .c-series {
  }

  .icon-arrow-r {
    font-size: 0.24rem;
  }

  .introduce, .teacher {
    margin-bottom: 0.2rem;
    background: #fff;
  }

  .tabs {
    position: sticky;
    z-index: 3;
    top: 0;
    border-bottom: 0.01rem #DDDDDD solid;
    background: #fff;
    -webkit-tap-highlight-color: transparent;
  }

  .qrcode {
  }

  .bottom-btn {
    position: fixed;
    width: 7.5rem;
    bottom: 0;
    z-index: 3;
  }

  .isShow {
    overflow-y: hidden;
    height: 100%;
  }
</style>
<style>

  .c-contents .box:last-child .frm-content {
    border-bottom: 0;
  }

  .c-contents .box:first-child .frm-content {
    padding-top: 0;
  }
</style>
