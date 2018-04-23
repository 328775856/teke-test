<template>
  <div class="c-series">
    <introduce></introduce>
    <teacher></teacher>
    <contents></contents>
  </div>
</template>

<script>
  import Introduce from '../components/introduce.vue'
  import Teacher from '../components/teacher.vue'
  import Contents from '../components/Contents.vue'

  export default {
    name: 'series',
    components: {Introduce, Teacher, Contents},
    data() {
      return {
      }
    }
  }
</script>

<style scoped>
  .c-series{
    background: #F2F2F2;
  }
.c-series div{
  margin-bottom: 0.2rem;
  background: #fff;
}
</style>
