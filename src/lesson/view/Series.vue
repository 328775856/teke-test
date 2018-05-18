<template>
  <div class="c-series" :class="{isShow:isShow||pay}">
    <div class="introduce">
      <div class="i-header">
        <introduce :introData="introData"></introduce>
      </div>
      <div class="i-content">
        <series-intro v-if="introData && introData.progress" :introData="introData"></series-intro>
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
        <teacher v-if="teacherData && teacherData.teacher" :teacherData="teacherData"></teacher>
      </div>
    </div>
    <div class="title">目录</div>
    <div class="contents">
      <catalog :catalogData="catalogData"></catalog>
    </div>
    <div class="title invite flex-row">邀请达人榜
      <div class="icon flex-row">
        <span class="pie-r"></span>
        <span class="pie-b"></span>
        <span class="pie-y"></span>
        <span class="icon-yike icon-arrow-r"></span>
      </div>
    </div>
    <div class="qrcode">
      <qrcode></qrcode>
    </div>
    <div class="bottom-btn">
      <series-btn @payShow="payShow" :isShow="isShow"></series-btn>
    </div>
    <pay :width="width" :pay="pay" @payShow="payShow" :payData="payData"></pay>
    <course-rules :width="width" :isShow="isShow" @show="show"></course-rules>
  </div>
</template>

<script>
  import Introduce from '../components/introduce.vue'
  import SeriesIntro from '../components/series/seriesintro.vue'
  import IntroBottom from '../components/introBottom.vue'
  import Teacher from '../components/teacher.vue'
  import Catalog from '../components/series/Catalog.vue'
  import SeriesBtn from '../components/series/series-btn.vue'
  import Tabs from '../components/tabs.vue'
  import Qrcode from '../components/qrcode.vue'
  import Pay from '../components/series/pay.vue'
  import courseRules from '../components/course-rules.vue'

  export default {
    name: 'series',
    components: {
      Introduce,
      Teacher,
      Catalog,
      SeriesBtn,
      Tabs,
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
        sn: 'S59f1ae4d89ee8',
        priceUrl: '/api/order-inquiry?sn=UO5af64f555ccb4'
      }
    },
    created() {
      this.fetchCatalog();
      this.fetchIntroduce();
      this.fetchTeacher();
      this.fetchPriceList()
    },
    mounted() {
      this.width = document.body.clientWidth
    },
    methods: {
      fetchCatalog() {
        this.axios
          .get('/api/series-relative', {
            params: {
              sn: this.$route.query.sn || this.sn
            }
          })
          .then(res => {
            if (res.data.error === '0') {
              this.catalogData = res.data.data
            }
          })
      },
      fetchIntroduce() {
        this.axios
          .get('/api/series-profile', {
            params: {
              sn: this.$route.query.sn || this.sn
            }
          })
          .then(res => {
            if (res.data.error === '0') {
              this.introData = res.data.data
            }
          })
      },
      fetchTeacher() {
        this.axios
          .get('/api/series-introduce', {
            params: {
              sn: this.$route.query.sn || this.sn
            }
          })
          .then(res => {
            if (res.data.error === '0') {
              this.teacherData = res.data.data
            }
          })
      },
      fetchPriceList() {
        this.axios
          .get(this.priceUrl, {
            params: {
             // sn: this.$route.query.sn || this.sn
            }
          })
          .then(res => {
            if (res.data.error === '0') {
              this.payData = res.data.data
            }
          })
      },
      active(index) {
        this.isActive = index
      },
      show() {
        this.isShow = !this.isShow
      },
      payShow() {
        this.pay = !this.pay
      }
    }
  }
</script>

<style scoped>
  .c-series {
  }

  .icon-arrow-r {
    font-size: 0.24rem;
  }

  .introduce, .teacher {
    margin-bottom: 0.2rem;
    background: #fff;
  }

  .title {
    position: relative;
    height: 0.36rem;
    font-size: 16px;
    padding: 0.32rem 0.31rem;
    line-height: 0.36rem;
    font-weight: bold;
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

  .invite {
    margin: 0.2rem 0;
    justify-content: space-between;
  }

  /*.invite > div span {*/
  /*border: 1px solid #ccc;*/
  /*border-radius: 0.4rem;*/
  /*color: white;*/
  /*}*/

  .invite > div span:last-child {
    color: #808080;
    font-weight: bold;
    margin-left: 0.06rem;
    text-align: right;
  }

  .invite .icon-arrow-r:before {
  }

  .contents div:first-child {
    padding-top: 0.1rem;
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

  .invite .pie-r, .invite .pie-b, .invite .pie-y {
    display: block;
    border-radius: 0.3rem;
    border-width: 0.3rem;
    margin-left: 0.1rem;
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
