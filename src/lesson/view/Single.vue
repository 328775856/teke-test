<template>
  <div class="c-single">
    <introduce></introduce>
  </div>
</template>

<script>
  import Introduce from '../components/introduce.vue'
  import Teacher from '../components/teacher.vue'
  import Catalog from '../components/Catalog.vue'
  import BottomBtn from '../components/bottom-btn.vue'
  import Tabs from '../components/tabs.vue'
  export default {
    name: "single",
    components: {Introduce, Teacher, Catalog, BottomBtn, Tabs}
  }
</script>

<style scoped>

</style>
<style>
  .single{
    height: 0.25rem;
    padding: 0 0.2rem;
  }
</style>
