<template>
  <div class="c-series" :class="{isShow:isShow}">
    <div class="introduce">
      <div class="i-header">
        <introduce :introData="introData"></introduce>
      </div>
      <div class="i-content">
        <series-intro v-if="introData && introData.progress" :introData="introData"></series-intro>
      </div>
      <div class="i-bottom">
        <intro-bottom></intro-bottom>
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
      <series-btn @show="show" :isShow="isShow"></series-btn>
    </div>
    <pay :width="width" :isShow="isShow" @show="show"></pay>
  </div>
</template>

<script>
  import Introduce from '../components/introduce.vue'
  import SeriesIntro from '../components/seriesintro.vue'
  import IntroBottom from '../components/introBottom.vue'
  import Teacher from '../components/teacher.vue'
  import Catalog from '../components/Catalog.vue'
  import SeriesBtn from '../components/series-btn.vue'
  import Tabs from '../components/tabs.vue'
  import Qrcode from '../components/qrcode.vue'
  import Pay from '../components/pay.vue'

  export default {
    name: 'series',
    components: {Introduce, Teacher, Catalog, SeriesBtn, Tabs, Qrcode, SeriesIntro, IntroBottom, Pay},
    data() {
      return {
        introData: [],
        catalogData: [],
        teacherData: [],
        tabs: ['课程', '目录'],
        isActive: 0,
        idx: '',
        width: '',
        isShow: false
      }
    },
    created() {
      this.fetchCatalog();
      this.fetchIntroduce();
      this.fetchTeacher()
    },
    mounted() {
      this.width = document.body.clientWidth
    },
    methods: {
      fetchCatalog() {
        this.axios
          .get('/api/series-catalog', {
            params: {
              sn: this.$route.query.sn
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
  .c-series{
    height: 100%;
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
    width: 100%;
    height: 1rem;
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
   .isShow{
     overflow-y: hidden;
   }
</style>
<style>
  .box:last-child .frm-content {
    border-bottom: 0;
  }
</style>
