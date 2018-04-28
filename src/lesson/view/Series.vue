<template>
  <div class="c-series">
    <div class="introduce">
      <introduce :introData="introData"></introduce>
    </div>
    <div class="tabs">
      <Tabs :catalog="catalog" @catalog="catalogShow"></Tabs>
    </div>
    <div class="teacher" v-if="catalog">
      <div class="title">
        讲师
      </div>
      <teacher></teacher>
    </div>
    <div class="title">目录</div>
    <div class="contents">
      <catalog :catalogData="catalogData"></catalog>
    </div>
    <div class="title invite flex-row">邀请达人榜
      <div class="icon">
        <span>123</span>
        <span>123</span>
        <span>123</span>
        <span class="icon-yike icon-arrow-r"></span>
      </div>
    </div>
    <div class="qrcode">
      <qrcode></qrcode>
    </div>
    <div class="bottom-btn">
      <bottom-btn></bottom-btn>
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
        catalog: true
      }
    },
    created() {
      this.fetchCatalog()
      this.fetchIntroduce()
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
          .get('api-lesson-')
      },
      catalogShow() {
        this.catalog = !this.catalog
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

  .invite > div span {
    width: 0.6rem;
    height: 0.6rem;
    border: 1px solid #ccc;
    border-radius: 0.4rem;
    color: white;
  }

  .invite > div span:last-child {
    padding: 0;
    border: 0;
    color: #808080;
    font-weight: bold;
  }

  .contents div:first-child {
    padding-top: 0.1rem;
  }

  .tabs {
    width: 100%;
    height: 1rem;
    position: sticky;
    z-index: 2;
    top: 0;
    background: #fff;
  }
  .qrcode{
  }

</style>
<style>
  .tab {
    position: sticky;
    top: 0;
  }
  .bottom-btn {
    position: fixed;
    width: 7.5rem;
    bottom: 0;
    z-index: 3;
  }
  .contents div:first-child .box .frm-content {
    border-top: 0;
  }
</style>
