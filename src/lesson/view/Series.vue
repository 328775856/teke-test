<template>
  <div class="c-series">
    <div class="introduce">
      <introduce :introData="introData" :single="single"></introduce>
    </div>
    <div class="tabs">
      <Tabs :show="isShow" @catalog="catalogShow" :title="title"></Tabs>
    </div>
    <div class="teacher" v-if="isShow">
      <div class="title">
        讲师
      </div>
      <teacher :teacherData="teacherData"></teacher>
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
      <bottom-btn :single="single"></bottom-btn>
    </div>
  </div>
</template>

<script>
  import Introduce from '../components/introduce.vue'
  import Teacher from '../components/teacher.vue'
  import Catalog from '../components/Catalog.vue'
  import BottomBtn from '../components/bottom-btn.vue'
  import Tabs from '../components/tabs.vue'
  import Qrcode from '../components/qrcode.vue'

  export default {
    name: 'series',
    components: {Introduce, Teacher, Catalog, BottomBtn, Tabs, Qrcode},
    data() {
      return {
        introData: [],
        catalogData: [],
        teacherData: [],
        single: false,
        isShow: true,
        title: '目录'
      }
    },
    created() {
      this.fetchCatalog()
      this.fetchIntroduce()
      this.fetchTeacher()
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
      catalogShow() {
        this.isShow = !this.isShow
      }
    }
  }
</script>

<style scoped>
  .icon-arrow-r {
    font-size: 0.24rem;
  }

  .c-series {
    background: #F2F2F2;
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
  .box:last-child .frm-content{
    border-bottom: 0;
  }
</style>
