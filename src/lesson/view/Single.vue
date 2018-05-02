<template>
  <div class="c-single">
    <div class="bottom">
      <introduce :introData="introData" :single="single"></introduce>
    </div>
    <div class="tabs">
      <tabs :catalog="catalog" @catalog="catalogShow" :title="title"></tabs>
    </div>
    <div>
      <div class="teacher" v-if="catalog">
        <div class="title">
          讲师
        </div>
        <teacher :teacherData="teacherData" v-if="teacherData"></teacher>
      </div>
    </div>
    <div>
      <div class="title">
        <div class="flex-row">相关系列课
          <div class="flex-row">查看完整课程
            <div class="icon-yike icon-arrow-r"></div>
          </div>
        </div>
      </div>
      <div>
        <relative  v-if="relativeData" :relativeData="relativeData"></relative>
      </div>
    </div>
    <div>
      <div class="title flex-row">评分(5.0)
        <div class="flex-row people">已有25人评价
          <div class="icon-yike icon-arrow-r"></div>
        </div>
      </div>
    </div>
    <div>
      <evaluate></evaluate>
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
      <bottom-btn :single="single"></bottom-btn>
    </div>
  </div>
</template>

<script>
  import Introduce from '../components/introduce.vue'
  import Teacher from '../components/teacher.vue'
  import Relative from '../components/relative.vue'
  import BottomBtn from '../components/bottom-btn.vue'
  import Tabs from '../components/tabs.vue'
  import Evaluate from '../components/evaluate.vue'
  import Qrcode from '../components/qrcode.vue'

  export default {
    name: "single",
    components: {Introduce, Teacher, BottomBtn, Tabs, Evaluate, Qrcode, Relative},
    data() {
      return {
        introData: [],
        relativeData: [],
        teacherData: [],
        catalog: true,
        single: true,
        title: '评价'
      }
    },
    created() {
      this.fetchRelative()
      this.fetchIntroduce()
      this.fetchTeacher()
    },
    methods: {
      fetchRelative() {
        this.axios
          .get('/api/lesson-relative', {
            params: {
              sn: this.$route.query.sn
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
          .get('/api/lesson-overview', {
            params: {
              sn: this.$route.query.sn
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
              sn: this.$route.query.sn
            }
          })
          .then(res => {
            if (res.data.error === '0') {
              this.teacherData = res.data.data
            }
          })
      },

      catalogShow() {
        this.catalog = !this.catalog
      }
    }
  }
</script>

<style scoped>
  .c-single {
    background: #F2F2F2;
  }

  .bottom {
    margin-bottom: 0.3rem;
  }

  .introduce, .teacher {
    margin-bottom: 0.2rem;
    background: #fff;
  }

  .title {
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
    width: 100%;
    height: 1rem;
    position: sticky;
    z-index: 3;
    top: 0;
    background: #fff;
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
</style>
<style>
</style>
