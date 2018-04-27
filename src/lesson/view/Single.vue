<template>
  <div class="c-single">
    <div class="bottom">
      <introduce></introduce>
    </div>
    <div>
      <tabs></tabs>
    </div>
    <div>
      <div class="title">评分(5.0)</div>
    </div>
    <div>
      <evaluate></evaluate>
    </div>
  </div>
</template>

<script>
  import Introduce from '../components/introduce.vue'
  import Teacher from '../components/teacher.vue'
  import Catalog from '../components/Catalog.vue'
  import BottomBtn from '../components/bottom-btn.vue'
  import Tabs from '../components/tabs.vue'
  import Evaluate from '../components/evaluate.vue'
  export default {
    name: "single",
    components: {Introduce, Teacher, Catalog, BottomBtn, Tabs, Evaluate}
  }
</script>

<style scoped>
  .c-single{
    background: #F2F2F2;
  }
  .bottom{
    margin-bottom: 0.3rem;
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
  .single{
    height: 0.25rem;
    padding: 0 0.2rem;
  }
</style>
<style>
</style>
