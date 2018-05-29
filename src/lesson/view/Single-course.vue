<template>
  <div class="c-single" :class="{isShow:isShow}">
    <div class="introduce">
      <div class="i-header">
        <introduce v-if="introData" :introData="introData"></introduce>
      </div>
      <div class="i-content">
        <single-intro v-if="introData" :introData="introData"></single-intro>
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
            :class="{active:isActive===index}">
      </tabs>
    </div>
    <div v-if="isActive===0">
      <div>
        <div class="teacher">
          <div class="title">
            讲师
          </div>
          <teacher v-if="teacherData" :teacherData="teacherData" :introData="introData"></teacher>
        </div>
      </div>
      <div class="title" v-if="JSON.stringify(relativeData) !== '[]'">
        <div class="flex-row">相关系列课
          <div class="flex-row">查看完整课程
            <div class="icon-yike icon-arrow-r"></div>
          </div>
        </div>
      </div>
      <div class="relative">
        <relative></relative>
      </div>
    </div>
    <div>
      <div class="title flex-row" v-if="ratingData.stats">评分({{ratingData.stats.score}})
        <div class="flex-row people">已有{{ratingData.stats.turnout}}人评价
          <div class="icon-yike icon-arrow-r"></div>
        </div>
      </div>
    </div>
    <div>
      <evaluate v-if="ratingData" :ratingData="ratingData"></evaluate>
    </div>
    <div class="invite">
      <invite :sn="sn"></invite>
    </div>
    <div class="qrcode">
      <qrcode></qrcode>
    </div>
    <div class="bottom-btn">
      <single-btn></single-btn>
    </div>
    <course-rules :isShow="isShow" @show="show"></course-rules>
  </div>
</template>

<script>
  import {markdown} from 'markdown'
  import Bus from '@/assets/js/bus'
  import Introduce from '../components/introduce.vue'
  import SingleIntro from '../components/single-course/singleIntro.vue'
  import IntroBottom from '../components/introBottom.vue'
  import Teacher from '../components/teacher.vue'
  import Relative from '../components/single-course/relative.vue'
  import Tabs from '../components/tabs.vue'
  import Invite from '../components/invite-list.vue'
  import Evaluate from '../components/single-course/evaluate.vue'
  import Qrcode from '../components/qrcode.vue'
  import SingleBtn from '../components/single-course/single-btn.vue'
  import courseRules from '../components/course-rules.vue'

  export default {
    name: "single-course",
    components: {
      markdown,
      Introduce,
      Teacher,
      SingleBtn,
      Tabs,
      Invite,
      Evaluate,
      Qrcode,
      Relative,
      SingleIntro,
      IntroBottom,
      courseRules
    },
    data() {
      return {
        introData: [],
        relativeData: [],
        teacherData: [],
        ratingData: [],
        tabs: ['课程', '评价'],
        isActive: 0,
        isShow: false,
        sn: ''
      }
    },
    created() {
      this.sn = this.$route.query.sn
      // 单课相关
      this.api.get('/api/lesson-relative', {
        sn: this.$route.query.sn
      })
        .then(res => {
          if (res.error === '0') {
            this.relativeData = res.data
          }
        })
      // 单课详情
      this.api.get('/api/lesson-profile', {
        sn: this.$route.query.sn
      })
        .then(res => {
          if (res.error === '0') {
            this.introData = res.data
          }
        })
      // 单课介绍
      this.api.get('/api/lesson-introduce', {
        sn: this.$route.query.sn
      })
        .then(res => {
          if (res.error === '0') {
            this.teacherData = res.data
            this.teacherData.content = markdown.toHTML(this.teacherData.content)
          }
        })
      // 单课评价
      this.api.get('/api/lesson-rating-list', {
        sn: this.$route.query.sn
      })
        .then(res => {
          if (res.error === '0') {
            this.ratingData = res.data
          }
        })
      // 单课支付
      Bus.$on('payShow', () => {
        this.pay = !this.pay
        if (this.pay === true) {
          this.api.post('/api/order-book-series', {
            sn: this.$route.query.sn
          })
            .then(res => {
              if (res.error === '0') {
                this.fetchPriceList()
              }
            })
        }
      })
    },
    methods: {
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
  .c-single {
  }

  .introduce, .teacher, .relative, .bottom {
    margin-bottom: 0.2rem;
    background: #fff;
  }

  .title.flex-row {
    justify-content: space-between;
    font-size: 16px;
  }

  .title .flex-row div {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
  }

  .title .people {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
  }

  .icon-arrow-r {
    padding-left: 0.19rem;
  }

  .single {
    height: 0.25rem;
    padding: 0 0.2rem;
  }

  .invite {
    margin: 0.2rem 0;
    justify-content: space-between;
  }

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
<style>
  .c-evaluate .frm:last-child {
    border-bottom: 0;
  }
</style>
