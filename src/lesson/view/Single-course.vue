<template>
  <div class="c-single" :class="{isShow:isShow}">
    <div class="introduce">
      <div class="i-header">
        <introduce :introData="introData"></introduce>
      </div>
      <div class="i-content">
        <single-intro :introData="introData"></single-intro>
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
          <teacher v-if="teacherData && teacherData.teacher" :teacherData="teacherData"></teacher>
        </div>
      </div>
      <div class="title" v-if="!relativeData">
        <div class="flex-row">相关系列课
          <div class="flex-row">查看完整课程
            <div class="icon-yike icon-arrow-r"></div>
          </div>
        </div>
      </div>
      <div class="relative" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <relative @fresh="fresh"></relative>
      </div>
    </div>
    <div>
      <div class="title flex-row" v-if="ratingData && ratingData.total">评分({{ratingData.total.score}})
        <div class="flex-row people">已有{{ratingData.total.turnout}}人评价
          <div class="icon-yike icon-arrow-r"></div>
        </div>
      </div>
    </div>
    <div v-if="!ratingData">
      <evaluate v-if="ratingData" :ratingData="ratingData"></evaluate>
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
      <single-btn></single-btn>
    </div>
    <course-rules :width="width" :isShow="isShow" @show="show"></course-rules>
  </div>
</template>

<script>
  import Introduce from '../components/introduce.vue'
  import SingleIntro from '../components/singleIntro.vue'
  import IntroBottom from '../components/introBottom.vue'
  import Teacher from '../components/teacher.vue'
  import Relative from '../components/relative.vue'
  import Tabs from '../components/tabs.vue'
  import Evaluate from '../components/evaluate.vue'
  import Qrcode from '../components/qrcode.vue'
  import SingleBtn from '../components/single-btn.vue'
  import courseRules from '../components/course-rules.vue'

  export default {
    name: "single-course",
    components: {
      Introduce,
      Teacher,
      SingleBtn,
      Tabs,
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
        width: '',
        isShow: false,
        sn: 'L5a7406f7caa14'
      }
    },
    created() {
      this.fetchIntroduce()
      this.fetchTeacher()
      this.fetchRating()
      this.fetchRelative()
    },
    mounted() {
      this.width = document.body.clientWidth
    },
    methods: {
      fresh() {
        this.fetchRelative()
      },
      fetchRelative() {
        this.axios
          .get('/api/lesson-relative', {
            params: {
              sn: this.$route.query.sn || this.sn
            }
          })
          .then(res => {
            if (res.data.error === '0') {
              this.relativeData = res.data.data
            }
          })
      },
      fetchIntroduce() {
        this.axios
          .get('/api/lesson-profile', {
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
          .get('/api/lesson-introduce', {
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
      fetchRating() {
        this.axios
          .get('/api/lesson-rating-list', {
            params: {
              sn: this.$route.query.sn || this.sn
            }
          })
          .then(res => {
            if (res.data.error === '0') {
              this.ratingData = res.data.data
            }
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
  .c-single {
  }

  .introduce, .teacher, .relative, .bottom {
    margin-bottom: 0.2rem;
    background: #fff;
  }

  .title {
    position: relative;
    justify-content: space-between;
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

  .title .flex-row {
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
