<template>
  <div class="c-series">
    <div class="introduce">
      <introduce></introduce>
    </div>
    <div class="tabs">
      <Tabs></Tabs>
    </div>
    <div class="teacher">
      <div class="title">
        讲师
      </div>
      <teacher></teacher>
    </div>
    <div class="title">目录</div>
    <div class="contents">
      <catalog></catalog>
    </div>
    <div class="title invite flex-row">邀请达人榜
      <div class="icon">
        <span>123</span>
        <span>123</span>
        <span>123</span>
        <span class="icon-yike icon-arrow-r"></span>
      </div>
    </div>
    <div class="frm-qrcode flex-row">
      <div class="text">如果对课程内容及产品使用上有任何建议和疑惑，请通过添加右侧二维码与我们进行联系沟通。</div>
      <div class="">
        <div></div>
        <div></div>
      </div>
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

  export default {
    name: 'series',
    components: {Introduce, Teacher, Catalog, BottomBtn, Tabs},
    data() {
      return {
        data: []
      }
    },
    created() {
      this.axios
        .get('/api/series-catalog', {
          params: {
            sn: this.$route.query.sn
          }
        })
        .then(res => {
          if (res.data.error === '0') {
            this.data = res.data.data
          }
        })
    }
  }
</script>

<style scoped>
  .c-series {
    background: #F2F2F2;
  }

  .introduce, .teacher {
    margin-bottom: 0.2rem;
    background: #fff;
  }

  .title {
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

  .frm-qrcode {
    justify-content: space-between;
    background: white;
    padding: 0.71rem 0.3rem 0.49rem 0.3rem;
  }

  .text {
    width: 3rem;
    padding-right: 0.3rem;
    border-right: 1px solid #ccc;
    font-size: 14px;
    color: rgba(102, 102, 102, 1);
    line-height: 24px;

  }

  .text + div {
    width: 3rem;
  }
  .tabs{
    width: 100%;
    height: 1rem;
    position: sticky;
    z-index: 2;
    top: 0;
    background: #fff;
  }
  .bottom-btn {
    position: sticky;
    bottom: 0;
    z-index: 3;
  }
</style>
<style>
  .tab {
    position: sticky;
    top: 0;
  }
  .contents div:first-child .box .frm-content {
    border-top: 0;
  }
</style>
